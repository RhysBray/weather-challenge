import * as React from "react";
import styles from "./questionContainer.module.scss";
import Question from "../../components/question";

export interface IProps {}

export interface IState {}

class QuestionContainer extends React.Component<IProps, IState> {
  public render() {
    return <Question />;
  }
}

export default QuestionContainer;
