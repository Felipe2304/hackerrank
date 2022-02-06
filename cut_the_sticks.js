const checkResult = (a, b) => {
  if (a === b) console.log("resposta correta", b);
  else console.log("resposta errada", b, "deveria ser", a);
};
const cutTheSticks = (arr) => {
  const cut = (stickes) => {
    const minValue = Math.min(...stickes);
    const newList = stickes.reduce((acc, value) => {
      const result = value - minValue;
      if (result > 0) return [...acc, result];
      return acc;
    }, []);
    return newList;
  };
  const quantities = [arr.length];
  let rodeMeuLoop = true;
  let newArr = arr;
  while (rodeMeuLoop) {
    newArr = cut(newArr);
    if (newArr.length < 1) break;
    quantities.push(newArr.length);
  }
  return quantities;
};
const arr = [8, 8, 14, 10, 3, 5, 14, 12];

const result = cutTheSticks(arr);
console.log("resultado: ", result);
