const checkResult = (a, b) => {
  if (a === b) console.log("resposta correta", b);
  else console.log("resposta errada", b, "deveria ser", a);
};

const sockMerchant = (n, ar) => {
  const filterPairs = ar.filter((value, index) => {
    return ar.indexOf(value) === index;
  });
  
  let numberPairs = 0
  for (let i = 0; i < filterPairs.length; i++) {
    let quantityPairs = 0;
    for (let a = 0; a < ar.length; a++) {
      if (filterPairs[i] === ar[a]) {
        quantityPairs++;
      }
    }
    numberPairs += Math.floor(quantityPairs / 2);
  }

  return numberPairs;
};
const ar = [4, 5, 5, 5, 6, 6, 4, 1, 4, 4, 3, 6, 6, 3, 6, 1, 4, 5, 5, 5];

const resulted = sockMerchant(9, ar);
checkResult(9, resulted);
