
const arr = [-4,3,-9,0,4,1]
const plusMinus=(arr)=>{

  // reduce 

  const matriz = arr.length

  const positives = arr.reduce((acc,number)=>{
    if(number > 0) return [...acc,number] 
    return acc
  },[]).length

  const zero = arr.reduce((acc,number)=>{
    if(number === 0) return [...acc,number] 
    return acc
  },[]).length

  const negative = arr.reduce((acc,number)=>{
    if(number < 0) return [...acc,number] 
    return acc
  },[]).length
  
  
  console.log((positives / matriz).toFixed(6) , 'reduce ')
  console.log((zero / matriz).toFixed(6) , 'reduce ')
  console.log((negative / matriz).toFixed(6) , 'reduce ')
  
  
  // filter

  const positives2 = arr.filter(number => number > 0 ).length
  const zero2 = arr.filter(number => number === 0).length
  const negative2 = arr.filter(number => number < 0).length
  
  console.log((positives2 / matriz).toFixed(6) , 'filter ')
  console.log((zero2 / matriz).toFixed(6) , 'filter ')
  console.log((negative2 / matriz).toFixed(6) , 'filter ')


  

  
}

plusMinus(arr)