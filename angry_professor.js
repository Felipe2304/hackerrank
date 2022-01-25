const checkResult = (a, b) => {
  if (a === b) console.log("resposta correta", b);
  else console.log("resposta errada", b, "deveria ser", a);
};

const angryProfessor = (k, a) => {
  let counter = 0;
  a.forEach((currentValue) => {
    if (currentValue <= 0) counter++;
  });
  if (counter >= k) {
    return "NO";
  } else {
    return "YES";
  }
};

const arr = [-1, -3, 4, 2];
const resulted = angryProfessor(2, arr);
checkResult('YES',resulted)
