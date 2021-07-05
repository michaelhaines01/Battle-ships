import "./grid.css";
import React from "react";
import Draggable from "react-draggable";

const Grid = (props) => {
  const human = props.playerboard;
  const ai = props.aiboard;

  return (
    <div className="board-container">
      <div className="game-board" id="human">
        {ai.map((nested, row) =>
          nested.map((cell, key) => {
            if (cell.ship === true && cell.hit === false)
              return (
                <div
                  className="grid-square"
                  key={key}
                  value={row}
                  onClick={(e) => {
                    props.testclick(key, row);
                  }}
                >
                  ~
                </div>
              );
            else if (cell.hit == true && cell.ship == false)
              return (
                <div
                  className="grid-square"
                  key={key}
                  value={row}
                  onClick={(e) => {
                    console.log("already hit bruh");
                  }}
                >
                  X
                </div>
              );
            else if (cell.hit === true && cell.ship === true)
              return (
                <div
                  className="grid-square"
                  key={key}
                  value={row}
                  onClick={(e) => {
                    props.testclick(key, row);
                  }}
                >
                  S
                </div>
              );
            return (
              <div
                className="grid-square"
                key={key}
                value={row}
                onClick={() => {
                  props.testclick(key, row);
                }}
              >
                ~
              </div>
            );
          })
        )}
      </div>

      <div className="game-board" id="ai">
        {human.map((nested, row) =>
          nested.map((cell, key) => {
            if (cell.ship === true && cell.hit === false)
              return (
                <div
                  className="grid-square"
                  draggable="true"
                  key={key}
                  value={row}
                >
                  S
                </div>
              );
            else if (cell.ship === true && cell.hit === true)
              return <div className="grid-square">H</div>;
            return <div className="grid-square">{cell.display}</div>;
          })
        )}
      </div>
    </div>
  );
};

export default Grid;
