import { object } from "prop-types";

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
  weather?: [
    {
      id?: number;
      main?: string;
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
