import * as React from "react";
import styles from "./playerContainer.module.scss";
import Player from "../../components/player";

export interface IProps {}

export interface IState {}

class PlayerContainer extends React.Component<IProps, IState> {
  public render() {
    return <Player />;
  }
}

export default PlayerContainer;
