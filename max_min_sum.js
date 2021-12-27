const arr = [1, 2, 3, 4, 5];

let somaTotal = 0;
let menorNumero = arr[0];
let maiorNumero = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (maiorNumero < arr[i]) {
    maiorNumero = arr[i];
  }
  if (menorNumero > arr[i]) {
    menorNumero = arr[i]
  }
  somaTotal += arr[i];
}
let somaMaxima = somaTotal - menorNumero
let somaMinima = somaTotal - maiorNumero

console.log(`${somaMinima} ${somaMaxima}`)