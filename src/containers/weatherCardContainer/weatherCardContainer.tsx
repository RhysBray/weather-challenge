import * as React from "react";
import styles from "./weatherCardContainer.module.scss";
import WeatherCard from "../../components/weatherCard";
import { IWeatherCard, fetchWeather } from "../../reducers/weatherReducer";
import { IStore } from "../../reducers";
import { connect } from "react-redux";

export interface IOwnProps {}

export interface IStateProps {
  weather: IWeatherCard[];
  fetchWeather: () => void;
}

export interface IState {}

class WeatherCardContainer extends React.Component<
  IOwnProps & IStateProps,
  IState
> {
  public componentDidMount = () => {
    this.props.fetchWeather();
  };
  public render() {
    return (
      <section className={styles["weather-section"]}>
        {this.props.weather.map((city, index) => (
          <WeatherCard weather={city} key={index} />
        ))}
      </section>
    );
  }
}

const mapStateToProps = (state: IStore, props: IOwnProps) => {
  return { weather: state.weather.weather };
};

const mapDispatchToProps = { fetchWeather };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherCardContainer);
