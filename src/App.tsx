import React from "react";
import "./App.scss";
import WeatherCardContainer from "./containers/weatherCardContainer";
import HeaderContainer from "./containers/headerContainer";
// import QuestionContainer from "./containers/questionContainer";
import { Provider } from "react-redux";
import store from "./store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="background" />
      <HeaderContainer />
      <WeatherCardContainer />
      {/* <QuestionContainer /> */}
    </Provider>
  );
};

export default App;
