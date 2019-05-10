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
        <p>Current temp: {this.props.weather.main.temp}</p>
        <p>Min-temp: {this.props.weather.main.temp_min}</p>
        <p>Max-temp: {this.props.weather.main.temp_max}</p>
        <p>Humidity: {this.props.weather.main.humidity}</p>
      </article>
    );
  }
}

export default WeatherCard;
