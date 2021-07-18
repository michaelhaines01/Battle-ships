import React from "react";
import "./grid.css";
import "./dragships.css";
const Dragships = (props) => {
  const ships = props.theships;
  // create an array for length then create the shipw
  const Createship = (props) => {
    let ships = [];

    for (let i = 0; i < props.ship.long; i++) {
      ships.push(<div className="ship-square" id={props.ship.ship}></div>);
    }

    return <div>{ships}</div>;
  };

  return (
    <div className="ship-container">
      {ships.map((ship) => {
        return <Createship ship={ship} />;
      })}
    </div>
  );
};

export default Dragships;
