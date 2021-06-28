import React from "react";
import "../App.css";

const Gameover = (props) => {
  return (
    <div>
      <div>
        <h2>Gameover</h2>
        <button onClick={() => props.restart()}> Restart</button>
      </div>
    </div>
  );
};

export default Gameover;
