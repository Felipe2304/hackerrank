const checkResult = (a, b) => {
  if (a === b) console.log("resposta correta", b);
  else console.log("resposta errada", b, "deveria ser", a);
};

const  hurdleRace = (k, height)=> {
  const filterHeight = height.filter(currentValue=>{return currentValue > k})
  let largerHeigth = filterHeight[0]
  const totalHeigth = filterHeight.reduce((acc,heigthValue) =>{
    if(largerHeigth < heigthValue) largerHeigth = heigthValue
    acc = largerHeigth - k

    return acc
  },0)
  return totalHeigth
}
const arr = [2 ,5, 4, 5 ,2]
const resulted = hurdleRace(7,arr)
checkResult(2,resulted)