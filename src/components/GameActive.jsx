import React from "react";

import ShowFlag from "./ShowFlag";
import Choices from "./Choices";
import MsgDisplay from "./MsgDisplay";
import Btn from "./Btn";

const GameActive = ({ data, data: { game } }) => {
  console.log(data);
  console.log(game);
  return (
    <div className="main">
      <MsgDisplay
        message={`Round: ${game.round} / ${game.maxRounds}`}
        size="medium"
      />
      <MsgDisplay message={game.message} size="big" />

      <Choices
        checkGameOver={data.checkGameOver}
        onUserChoice={data.handleUserChoice}
        game={game}
      />
      <Btn content="Next country" onClick={data.handleNextCountry} />
      <ShowFlag flag={game.choicesList.selectedCountry.flag} />
    </div>
  );
};

export default GameActive;
