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
};
export default Playershiplist;
