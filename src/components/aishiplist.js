import React from "react";
import "./aishiplist.css";
const Aishiplist = (props) => {
  let ships = props.aisunkships;

  return (
    <div>
      {ships.map((ship, index) => {
        if (ship.sunk === true)
          return (
            <div key={index}>
              <h1>{ship.ship} SUNK!</h1>
            </div>
          );
        else
          return (
            <div key={index}>
              <h1>{ship.ship} </h1>
            </div>
          );
      })}
    </div>
  );
};
export default Aishiplist;
