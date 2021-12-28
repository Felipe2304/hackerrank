const arr = [1, 2, 3, 4, 5];

let somaTotal = 0;
let minimo = arr[0];
let maximo = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (maximo < arr[i]) {
    maximo = arr[i];
  }
  if (minimo > arr[i]) {
    minimo = arr[i]
  }
  somaTotal += arr[i];
}


let somaMaxima = somaTotal - minimo
let somaMinima = somaTotal - maximo

console.log(`${somaMinima} ${somaMaxima}`)




