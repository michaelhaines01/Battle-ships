import "./aiboard.scss";
import React from "react";

const Aiboard = (props) => {
  const ai = props.aiboard;

  return (
    <div>
      <div className="game-board" id="human">
        {ai.map((nested, row) =>
          nested.map((cell, key) => {
            if (cell.ship === true && cell.hit === false)
              return (
                <div
                  className="hidden"
                  key={key}
                  value={row}
                  onClick={() => {
                    props.handleClick(key, row);
                  }}
                ></div>
              );
            else if (cell.hit === true && cell.ship === false)
              return (
                <div
                  className="aimiss"
                  key={key}
                  value={row}
                  onClick={() => {
                    console.log("already hit");
                  }}
                >
                  X
                </div>
              );
            else if (cell.hit === true && cell.ship === true)
              return (
                <div
                  className="aishiphit"
                  key={key}
                  value={row}
                  onClick={() => {
                    console.log("already hit");
                  }}
                ></div>
              );
            return (
              <div
                className="hidden"
                key={key}
                value={row}
                onClick={() => {
                  props.handleClick(key, row);
                }}
              ></div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Aiboard;
