import React, { useState } from "react";

const Playershiplist = (props) => {
  let ships = props.playersunkships;

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
export default Playershiplist;
