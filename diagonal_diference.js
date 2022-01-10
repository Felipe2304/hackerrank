let matriz = [[34,54,2],[23,54,9],[43,12,3]]

const calcMatriz = (arr) => {
  let soma1 = 0;
  let soma2 = 0;
  for (let i = 0; i < arr.length; i++) {
    soma1 += arr[i][i];
    soma2 += arr[i][arr.length - i - 1];
  }

  let  resultado = soma1 - soma2;
  
  if (resultado < 0){
    resultado = resultado * -1;
  }
  // return resulatado
  console.log(resultado)
  
};

calcMatriz(matriz);