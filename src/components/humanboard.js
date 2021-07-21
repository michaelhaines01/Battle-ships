import "./grid.css";

const Humanboard = (props) => {
  const human = props.playerboard;

  return (
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
  );
};
export default Humanboard;
