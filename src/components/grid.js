import "./grid.css";
import React from "react";

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
                  className="hidden-square"
                  key={key}
                  value={row}
                  onClick={() => {
                    props.testclick(key, row);
                  }}
                ></div>
              );
            else if (cell.hit === true && cell.ship === false)
              return (
                <div
                  className="hit-square"
                  key={key}
                  value={row}
                  onClick={() => {
                    console.log("already hit bruh");
                  }}
                >
                  X
                </div>
              );
            else if (cell.hit === true && cell.ship === true)
              return (
                <div
                  className="shiphit-square"
                  key={key}
                  value={row}
                  onClick={() => {
                    console.log("already hit");
                  }}
                ></div>
              );
            return (
              <div
                className="hidden-square"
                key={key}
                value={row}
                onClick={() => {
                  props.testclick(key, row);
                }}
              ></div>
            );
          })
        )}
      </div>
      <div className="message-board">
        <h1>HII</h1>
      </div>
      <div className="game-board" id="ai">
        {human.map((nested, row) =>
          nested.map((cell, key) => {
            if (cell.ship === true && cell.hit === false)
              return <div className="ship-square" key={key} value={row}></div>;
            else if (cell.ship === true && cell.hit === true)
              return <div className="shiphit-square"></div>;
            else if (cell.hit === true)
              return <div className="hit-square">X</div>;
            return <div className="hit-square"></div>;
          })
        )}
      </div>
    </div>
  );
};

export default Grid;
