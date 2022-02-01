const checkResult = (a, b) => {
  if (a === b) console.log("resposta correta", b);
  else console.log("resposta errada", b, "deveria ser", a);
};

const countingValleys = (steps, path) => {
  let quantity = 0;
  const pathList = path.split("").reduce((acc, value) => {
    value === "U" ? quantity++ : quantity--;
    if(value === "D" && quantity === -1){
      acc ++
    }
    return acc
  },0);
 
  return pathList
};

const resulted = countingValleys(8, "DDUUDDUDUUUD");
checkResult(2, resulted);
