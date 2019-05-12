const info = {
  cnt: 3,
  list: [
    {
      coord: { lon: -0.09, lat: 51.51 },
      sys: {
        type: 1,
        id: 1414,
        message: 0.0094,
        country: "GB",
        sunrise: 1557548118,
        sunset: 1557603495
      },
      weather: [
        { id: 521, main: "Rain", description: "shower rain", icon: "09d" }
      ],
      main: {
        temp: 13.59,
        pressure: 1021,
        humidity: 66,
        temp_min: 11,
        temp_max: 16.11
      },
      visibility: 10000,
      wind: { speed: 3.6, deg: 70 },
      clouds: { all: 24 },
      dt: 1557580937,
      id: 2643744,
      name: "City of London"
    },
    {
      coord: { lon: -82.19, lat: 36.6 },
      sys: {
        type: 1,
        id: 6178,
        message: 0.0082,
        country: "US",
        sunrise: 1557570317,
        sunset: 1557620704
      },
      weather: [
        { id: 501, main: "Rain", description: "moderate rain", icon: "10d" },
        {
          id: 300,
          main: "Drizzle",
          description: "light intensity drizzle",
          icon: "09d"
        }
      ],
      main: {
        temp: 16.76,
        pressure: 1017,
        humidity: 100,
        temp_min: 13.89,
        temp_max: 18.89
      },
      visibility: 16093,
      wind: { speed: 2.6, deg: 100 },
      clouds: { all: 90 },
      dt: 1557580937,
      id: 4749005,
      name: "City of Bristol"
    },
    {
      coord: { lon: -85.16, lat: 34.26 },
      sys: {
        type: 1,
        id: 5680,
        message: 0.0093,
        country: "US",
        sunrise: 1557571319,
        sunset: 1557621128
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
        {
          id: 211,
          main: "Thunderstorm",
          description: "thunderstorm",
          icon: "11d"
        },
        { id: 701, main: "Mist", description: "mist", icon: "50d" }
      ],
      main: {
        temp: 20.24,
        pressure: 1015,
        humidity: 88,
        temp_min: 18.89,
        temp_max: 21.11
      },
      visibility: 16093,
      wind: { speed: 1.5, deg: 200 },
      clouds: { all: 90 },
      dt: 1557580937,
      id: 4219762,
      name: "Rome"
    }
  ]
};
//interface
// export interface {
//   location: string;
//   temperature: number;
//   minTemperature: number;
//   maxTemperature: number;
//   humidity: number;
// }

export interface IWeatherCard {
  coord?: Object;
  weather: [
    {
      id?: number;
      main: string;
      description?: string;
      icon?: string;
    }
  ];
  base?: string;
  main: {
    temp: number;
    pressure?: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
  };
  visibility?: number;
  wind?: { speed: number; deg: number };
  clouds?: { all: number };
  dt?: number;
  sys?: {
    type: number;
    id: number;
    message: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  id?: number;
  name: string;
  cod?: number;
}
// action types
export const FETCH_WEATHER = "FETCH_WEATHER";
export const SUCCESS_FETCH_WEATHER = "SUCCESS_FETCH_WEATHER";
export const FAILURE_FETCH_WEATHER = "FAILURE_FETCH_WEATHER";

//  action interface
export interface IGetWeatherAction {
  type: typeof FETCH_WEATHER;
}
export interface IGetWeatherSuccessAction {
  type: typeof SUCCESS_FETCH_WEATHER;
  weather: IWeatherCard[];
}
export interface IGetWeatherFailureAction {
  type: typeof FAILURE_FETCH_WEATHER;
  error: Error;
}

// action creator
export const getWeather = (): IGetWeatherAction => ({
  type: FETCH_WEATHER
});

export const getWeatherSuccess = (
  weather: IWeatherCard[]
): IGetWeatherSuccessAction => ({
  type: SUCCESS_FETCH_WEATHER,
  weather
});

export const getWeatherFailure = (error: Error): IGetWeatherFailureAction => ({
  type: FAILURE_FETCH_WEATHER,
  error
});

export const fetchWeather = () => (dispatch: any) => {
  dispatch(getWeather());
  fetch(
    "http://api.openweathermap.org/data/2.5/group?id=2643744,4749005,4219762&units=metric&appid=0f33f5c78acf44e7d38b5f6706f6f59d"
  )
    .then(res => res.json())
    .then(data => dispatch(getWeatherSuccess(data.list)))
    .catch(error => {
      dispatch(getWeatherFailure(error));
      alert("something's up");
    });
};

// export const fetchWeather = (weather: IWeatherCard) => (dispatch: any) => {
//   dispatch(getWeather());
//   dispatch(getWeatherSuccess(weather));
// };

// combining action creators
type IWeatherActions =
  | IGetWeatherAction
  | IGetWeatherSuccessAction
  | IGetWeatherFailureAction;

// initialstate interface
export interface IWeatherState {
  weather: IWeatherCard[];
  error: null | Error;
  loading: boolean;
}

// initialstate
const initialState: IWeatherState = {
  weather: [],
  error: null,
  loading: false
};

// reducer
const weatherReducer = (state = initialState, action: IWeatherActions) => {
  switch (action.type) {
    case FETCH_WEATHER:
      return { ...state, loading: true, error: null };
    case SUCCESS_FETCH_WEATHER:
      return { ...state, loading: false, error: null, weather: action.weather };
    case FAILURE_FETCH_WEATHER:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default weatherReducer;
