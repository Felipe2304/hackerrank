const checkResult = (a, b) => {
  if (a === b) console.log("resposta correta", b);
  else console.log("resposta errada", b, "deveria ser", a);
};

function equalizeArray(arr) {
  const filterNumbers = arr.filter((value, index) => {
    return arr.indexOf(value) === index;
  });
  let maxValue = 0;
  let maxQuantity = 0;
  for (let i = 0; i < filterNumbers.length; i++) {
    let counter = 0;
    for (let a = 0; a < arr.length; a++) {
      if (filterNumbers[i] === arr[a]) {
        counter++;
      }
    }
    if (counter > maxValue) {
      maxValue = counter;
      maxQuantity = filterNumbers[i];
    }
  }

  const resulted = arr.filter((value) => {
    return value !== maxQuantity;
  });

  return resulted.length;
}

const arr = [
  69, 86, 100, 69, 55, 83, 15, 69, 86, 69, 79, 16, 86, 24, 24, 55, 16, 69, 100,
  79, 16, 83, 83, 79, 15, 15, 86, 16, 55, 18, 100, 100, 86, 16, 83, 79, 86, 83,
  100, 83, 55, 15, 86, 86, 55, 100, 55, 18, 55, 100, 86, 69, 83, 24, 16, 55,
  100, 16, 100, 24, 16, 55, 15, 79, 16, 18, 16, 16, 83, 83, 69, 18, 100, 79, 16,
  24, 79, 16, 69, 86, 83, 79, 83, 18, 15, 100, 24, 83,
];

const resulted = equalizeArray(arr);
checkResult(2, resulted);
