const checkResult = (a, b) => {
  if (a === b) console.log("resposta correta", b);
  else console.log("resposta errada", b, "deveria ser", a);
};

const divisibleSumPairs = (n, k, ar) => {
  let counter = 0;

  for (let i = 0; i < ar.length; i++) {
    const pairOne= ar[i];

    for (let a = i + 1; a < n; a++) {
      const pairTwo = ar[a]
      const sum = pairTwo + pairOne
      
      if(sum % k === 0 )counter++
    }
  }
  return counter
};

const ar = [29,97,52,86,27,89,77,19,99,96];
//n numero de elemntos dentro do array
//k inteiro para divisao
// ar array com os elementos de inteiros

const result1 = divisibleSumPairs(10, 3, ar);
checkResult(15, result1);
