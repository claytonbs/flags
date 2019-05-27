import React from "react";
import GameActive from "./GameActive";
import GameOver from "./GameOver";

import "./Main.scss";

const Main = props => {
  return (
    <React.Fragment>
      {props.checkGameOver() ? (
        <GameOver data={props} />
      ) : (
        <GameActive data={props} />
      )}
    </React.Fragment>
  );
};

export default Main;
