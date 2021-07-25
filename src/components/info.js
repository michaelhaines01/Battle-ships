import React from "react";
import "../App.css";

const Infoboard = (props) => {
  return (
    <div className="board-container">
      <div className="messageboard-container">
        <div className="legend-container">
          <h1>Ship:</h1>
          <div className="ship-square"></div>
        </div>
        <div className="legend-container">
          <h1>Hit:</h1>
          <div className="shiphit-square"></div>
        </div>
        <div className="legend-container">
          <h1>Openwater:</h1>
          <div className="hit-square">X</div>
        </div>
        <div className="legend-container">
          <h1>Ship hit:</h1>
          <div className="hit-square"></div>
        </div>

        <button className="buttons" onClick={() => props.setgameover(false)}>
          <h3>Lets do battle</h3>
          <img src="https://img.icons8.com/ios-filled/30/00000/cannon.png" />
        </button>
      </div>
    </div>
  );
};

export default Infoboard;
