import * as React from "react";
import styles from "./weatherCard.module.scss";
import { IWeatherCard } from "../../reducers/weatherReducer";

export interface IProps {
  weather: IWeatherCard;
}
let weatherGif = "a";
export interface IState {}
const weatherImage = (type: string) => {
  switch (type) {
    case "Rain":
      return (weatherGif = styles.rain);
    case "Mist":
      return (weatherGif = styles.mist);
    case "Sun":
      return (weatherGif = styles.sun);
    case "Snow":
      return (weatherGif = styles.snow);
    case "Clear":
      return (weatherGif = styles.clear);
    case "Fog":
      return (weatherGif = styles.fog);
    case "Thunderstorm":
      return (weatherGif = styles.thunderstorm);
    case "Clouds":
      return (weatherGif = styles.clouds);
    default:
      return console.log("no match");
  }
};

class WeatherCard extends React.Component<IProps, IState> {
  public render() {
    weatherImage(this.props.weather.weather[0].main);
    return (
      <article className={`${styles["weather-card"]} ${weatherGif}`}>
        <div className={styles.content}>
          <h2>{this.props.weather.name}</h2>
          <p>{this.props.weather.weather[0].main}</p>
          <div className={styles.stats}>
            <div className={styles.categories}>
              <p>Current temp: </p>
              <p>Min-temp: </p>
              <p>Max-temp: </p>
              <p>Humidity: </p>
            </div>
            <div className={styles.values}>
              <p>{Math.floor(this.props.weather.main.temp)} C</p>
              <p>{Math.floor(this.props.weather.main.temp_min)} C</p>
              <p>{Math.floor(this.props.weather.main.temp_max)} C</p>
              <p>{this.props.weather.main.humidity}</p>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default WeatherCard;
