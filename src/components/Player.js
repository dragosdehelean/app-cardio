import React from "react";
import Counter from "./Counter";

const Player = props => {
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => props.removePlayer(props.id)}>
          ✖
        </button>
        {props.name + '  id: ' + props.id}
      </span>

      <Counter 
        score= {props.score}
        changeScore = {props.changeScore} 
        id = {props.id}
        />
    </div>
  );
};

export default Player;
