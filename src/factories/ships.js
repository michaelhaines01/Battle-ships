const Ship = (name, cords) => {
  let shipname = name;
  let shipcords = cords;
  let hitsarray = [];

  const hit = (shot) => {
    hitsarray.push(shot);

    return hitsarray;
  };

  const shipsunk = () => {
    if (shipcords === hitsarray.length) {
      return true;
    }
    return false;
  };

  return { shipname, hit, shipsunk, shipcords };
};
export default Ship;
