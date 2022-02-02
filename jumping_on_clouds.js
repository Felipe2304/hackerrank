const checkResult = (a, b) => {
  if (a === b) console.log("resposta correta", b);
  else console.log("resposta errada", b, "deveria ser", a);
};

const jumpingOnClouds = (c, k) => {
  let energy = 100;
  const numberJumps = c.filter((value, index) => {
    return index % k === 0;
  });
  const finalEnergy = numberJumps.reduce((acc, value) => {
    if (value === 1) acc -= 2;
    return acc;
  }, energy);
  
  return finalEnergy - numberJumps.length;
};

const arr = [0, 1];
const resulted = jumpingOnClouds(arr, 1);
checkResult(96, resulted);
