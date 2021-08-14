const Ship = (name, length) => {
  let shipname = name;

  let hitsarray = [];

  const hit = (shot) => {
    hitsarray.push(shot);

    return hitsarray;
  };

  const shipsunk = () => {
    if (length === hitsarray.length) {
      return true;
    }
    return false;
  };

  return { shipname, hit, shipsunk };
};
export default Ship;
