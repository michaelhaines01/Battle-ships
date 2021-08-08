import "./humanboard.scss";
const Humanboard = (props) => {
  const human = props.playerboard;

  return (
    <div className="game-board" id="ai">
      {human.map((nested, row) =>
        nested.map((cell, key) => {
          if (cell.ship === true && cell.hit === false)
            return <div className="ship" key={key} value={row}></div>;
          else if (cell.ship === true && cell.hit === true)
            return <div className="shiphit"></div>;
          else if (cell.hit === true) return <div className="hit">X</div>;
          return <div className="hit"></div>;
        })
      )}
    </div>
  );
};
export default Humanboard;
