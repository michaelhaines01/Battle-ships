import "./grid.css";
import React from "react";

const Grid = (props) => {
  const ai = props.aiboard;

  return (
    <div>
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
    </div>
  );
};

export default Grid;
