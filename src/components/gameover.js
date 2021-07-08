import React from "react";
import "../App.css";

const Gameover = (props) => {
  return (
    <div>
      <div>
        <h1>{props.winner}</h1>
        <h2>Gameover</h2>

        <button onClick={() => props.setgameover(false)}> Restart</button>
      </div>
    </div>
  );
};

export default Gameover;
