const arr = [7, 69, 2, 221, 8974];

let somaTotal = 0;
let minimo = arr[0];
let maximo = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (maximo < arr[i]) maximo = arr[i];
  if (minimo > arr[i]) minimo = arr[i];
  somaTotal += arr[i];
}

let somaMaxima = somaTotal - minimo;
let somaMinima = somaTotal - maximo;

console.log(`${somaMinima} ${somaMaxima}`);
