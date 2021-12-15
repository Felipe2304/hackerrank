let lista1 = [8, 3, 2];
let lista2 = [9, 5, 5];

const comparacao = (a, b) => {
  let alice = 0;
  let bob = 0;
  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      alice += 1;
    } else if (b[i] > a[i]) {
      bob += 1;
    }
  }
  const resultado=[alice,bob]
  
  return resultado
};
comparacao(lista1, lista2);
