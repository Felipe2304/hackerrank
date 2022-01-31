const checkResult = (a, b) => {
  if (a === b) console.log("resposta correta", b);
  else console.log("resposta errada", b, "deveria ser", a);
};

const camelcase = (s) => {
  const arrOfLetters = s.split("");
  const quantity = arrOfLetters.reduce((acc, value) => {
    if(value == value.toUpperCase()){
      acc++
    }
    return acc
  },1);

  return quantity
};

const resulted = camelcase("saveChangesInTheEditor");
checkResult(5, resulted);