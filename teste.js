const teste = [
  0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0,
  0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0,
];

let num1 = 0;
let num0 = 0;

for (let i = 0; i < teste.length; i++) {
  if (teste[i] === 0) num0++;
  if (teste[i] === 1) num1++;
}

console.log(num0, "0", num1, "1");
