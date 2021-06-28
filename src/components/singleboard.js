const Singleboard = (props) => {
  const board = props.board;
  const setplace = props.setplace;

  return (
    <div>
      <div className="board-container">
        <div className="game-board">
          {board.map((nested, row) =>
            nested.map((cell, key) => {
              if (cell.ship === true)
                return (
                  <div className="grid-square" key={key} value={row}>
                    S
                  </div>
                );
              else
                return (
                  <div className="grid-square" key={key} value={row}>
                    ~
                  </div>
                );
            })
          )}
        </div>
      </div>
      <div>
        <button onClick={() => setplace((c) => c + 1)}>Random ships</button>
      </div>
    </div>
  );
};
export default Singleboard;
