import React from "react";
import "./aishiplist.scss";
const Aishiplist = (props) => {
  let ships = props.aisunkships;
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
export default Aishiplist;
