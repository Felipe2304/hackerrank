const checkResult = (a, b) => {
  if (a === b) console.log("resposta correta", b);
  else console.log("resposta errada", b, "deveria ser", a);
};

const utopianTree = (n) => {
  let altura = 1;
  for (let i = 1; i <= n; i++) {
    if(i % 2 !== 0){
      altura = altura * 2
    }else{
      altura+= 1
    }
  }
  return altura
};
const resulted = utopianTree(21);
checkResult(4094 , resulted)

