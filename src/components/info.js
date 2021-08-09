import React from "react";
import "./info.scss";

const Infoboard = (props) => {
  return (
    <div className="board-container">
      <div className="legend-container">
        <div className="sqaure-container">
          <div className="ship"></div>
          <h4>Ship</h4>
        </div>
        <div className="sqaure-container">
          <div className="shiphit"></div>
          <h4> Ship hit</h4>
        </div>
        <div className="sqaure-container">
          <div className="openwater"></div>
          <h4>Openwater</h4>
        </div>
        <div className="sqaure-container">
          <div className="miss">X</div>
          <h4>Miss</h4>
        </div>
        <div className="button-container">
          <button
            className="startbutton"
            onClick={() => props.setgameover(false)}
          >
            <h3>Lets do battle</h3>
            <img
              src="https://img.icons8.com/ios-filled/30/00000/cannon.png"
              alt="cannon"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Infoboard;
