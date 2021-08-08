import React, { useState } from "react";
import "./playershiplist.scss";

const Playershiplist = (props) => {
  let ships = props.playersunkships;

  const Createship = (props) => {
    let shipsarray = [];
    for (let i = 0; i < props.ship.long; i++) {
      if (props.ship.sunk === true) {
        shipsarray.push(<div className="shiphit" id={props.ship.ship}></div>);
      } else {
        shipsarray.push(<div className="ship" id={props.ship.ship}></div>);
      }
    }
    return <div>{shipsarray}</div>;
  };

  return (
    <div className="ship-container">
      {ships.map((ship) => {
        return <Createship ship={ship} />;
      })}
    </div>
  );

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
