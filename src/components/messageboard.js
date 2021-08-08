import "./messageboard.scss";
const Messageboard = (props) => {
  const Aimessage = () => {
    return <h1>Ai turn</h1>;
  };

  const Playermessage = () => {
    return <h1>Player turn</h1>;
  };

  const Winnermessage = () => {
    return (
      <div>
        <h1>{props.winner.winner} LOL you will never beat me.</h1>
        <button className="buttons" onClick={() => props.setgameover(true)}>
          Restart{" "}
        </button>
      </div>
    );
  };

  return (
    <div className="messageboard-container">
      {!props.turn && !props.winner.gameover && <Aimessage />}
      {props.turn && !props.winner.gameover && <Playermessage />}
      {props.winner.gameover && <Winnermessage />}
    </div>
  );
};
export default Messageboard;
