const Singleboard = (props) => {
  return (
    <div>
      <div className="board-container">
        <div className="game-board">
          {props.board.map((nested, row) =>
            nested.map((cell, key) => {
              if (cell.ship === true)
                return (
                  <div className="ship-square" key={key} value={row}></div>
                );
              else
                return (
                  <div className="grid-square" key={key} value={row}></div>
                );
            })
          )}
        </div>
      </div>
    </div>
  );
};
export default Singleboard;
