const checkResult = (a, b) => {
  if (a === b) console.log("resposta correta", b);
  else console.log("resposta errada", b, "deveria ser", a);
};

const permutationEquation = (p) => {
  const indexNumberOne = p.map((value, index) => {
    const indexValue = p.indexOf(index + 1);

    return indexValue + 1;
  });
  const resultedIndex = indexNumberOne.map((value, index, arr) => {
    const indexValue = p.indexOf(arr[index]);

    return indexValue + 1;
  });

  return resultedIndex
};
const arr = [5, 2, 1, 3, 4];
const resulted = permutationEquation(arr);
checkResult([4, 2, 5, 1, 3], resulted);


