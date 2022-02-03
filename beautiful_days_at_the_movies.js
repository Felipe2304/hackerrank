const checkResult = (a, b) => {
  if (a === b) console.log("resposta correta", b);
  else console.log("resposta errada", b, "deveria ser", a);
};

const  beautifulDays = (i, j, k)=> {
  const  list = []
  let invertedNumber = 0 
  for(let index = i ; index <= j ; index++ ){
    invertedNumber = index.toString().split('').reverse().join('')
    list.push(parseInt(invertedNumber - index))
  }

  const numberOfDays = list.reduce((acc,value)=>{
    if(value / k % 1 === 0){
      acc++
    }
    return acc
  },0)

  return numberOfDays
}

const resulted = beautifulDays(20,23,6)
checkResult(2,resulted)