import * as React from "react";
import styles from "./question.module.scss";

export interface IProps {}

export interface IState {
  isCorrect: boolean | null;
}

const randomNumber = () => {
  return Math.floor(Math.random() * 101);
};
const number1 = randomNumber();
const number2 = randomNumber();

let correctIndicator = "";
const indicator = (correctOrNot: boolean | null) => {
  if (correctOrNot === null) {
    return (correctIndicator = "");
  } else if (correctOrNot === true) {
    return (correctIndicator = styles.correct);
  } else {
    return (correctIndicator = styles["in-correct"]);
  }
};
class Question extends React.Component<IProps, IState> {
  state = { isCorrect: null };
  private checkAnswer = (answer: number) => {
    answer === number1 + number2
      ? this.setState({ isCorrect: true })
      : this.setState({ isCorrect: false });
  };
  public render() {
    indicator(this.state.isCorrect);
    return (
      <section className={`${styles.question} ${correctIndicator}`}>
        <label className={styles.ask} htmlFor="question">
          What is {number1} + {number2}?
        </label>
        <input
          className={styles.answer}
          onChange={event => this.checkAnswer(parseInt(event.target.value))}
          name="question"
          type="number"
          placeholder="Answer Here"
        />
      </section>
    );
  }
}

export default Question;
