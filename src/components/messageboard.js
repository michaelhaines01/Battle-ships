import "./messageboard.css";
const Messageboard = (props) => {
  const Aimessage = () => {
    return <h1>Ai turn!</h1>;
  };

  const Playermessage = () => {
    return <h1>Player turn!</h1>;
  };

  return (
    <div className="messageboard-container">
      {!props.turn && <Aimessage />}
      {props.turn && <Playermessage />}
    </div>
  );
};
export default Messageboard;
