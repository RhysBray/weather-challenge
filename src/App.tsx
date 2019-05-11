import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import WeatherCardContainer from "./containers/weatherCardContainer";
import HeaderContainer from "./containers/headerContainer";
import { Provider } from "react-redux";
import store from "./store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="background" />
      <HeaderContainer />
      <WeatherCardContainer />
    </Provider>
  );
};

export default App;
