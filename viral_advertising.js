const checkResult = (a, b) => {
  if (a === b) console.log("resposta correta", b);
  else console.log("resposta errada", b, "deveria ser", a);
};

const  viralAdvertising = (n)=> {
  let share = 5
  let like = 2
  for(let i = 1 ; i < n ; i++){
    let resultDivision = Math.floor(share/2)
    share = resultDivision * 3 
    like = Math.floor(share / 2) + like
  }
  return like
}
const resulted = viralAdvertising(34)
checkResult(9,resulted)