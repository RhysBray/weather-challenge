import * as React from "react";
import styles from "./weatherCard.module.scss";
import { IWeatherCard } from "../../reducers/weatherReducer";

export interface IProps {
  weather: IWeatherCard;
}

export interface IState {}

class WeatherCard extends React.Component<IProps, IState> {
  public render() {
    return (
      <article className={styles["weather-card"]}>
        <h2>{this.props.weather.name}</h2>
        <div className={styles.content}>
          <div className={styles.categories}>
            <p>Current temp: </p>
            <p>Min-temp: </p>
            <p>Max-temp: </p>
            <p>Humidity: </p>
          </div>
          <div className={styles.stats}>
            <p>{this.props.weather.main.temp} C</p>
            <p>{this.props.weather.main.temp_min} C</p>
            <p>{this.props.weather.main.temp_max} C</p>
            <p>{this.props.weather.main.humidity}</p>
          </div>
        </div>
      </article>
    );
  }
}

export default WeatherCard;
