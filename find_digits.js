const checkResult = (a, b) => {
  if (a === b) console.log("resposta correta", b);
  else console.log("resposta errada", b, "deveria ser", a);
};

const findDigits = (n) => {
  const numbers = n.toString().split("");
  const filterNumbers = numbers.filter((value) => {
    return n % value == 0;
  });
  return filterNumbers.length;
};
const resulted = findDigits(1012);
checkResult(3, resulted);
