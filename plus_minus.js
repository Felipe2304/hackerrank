
  const arr = [-4,3,-9,0,4,1]
const plusMinus=(arr)=>{
  
  let positivos = 0 
  let negativos = 0
  let zero = 0
  let matriz = arr.length

  for(let i = 0 ; i < matriz ; i++){
    let numerosDaLista = arr[i]
    
    if(numerosDaLista < 0){
      negativos++
    }else if(numerosDaLista > 0){
      positivos++
    }else{
      zero++
    }
  }
  console.log((negativos/matriz).toFixed(6))
  console.log((positivos/matriz).toFixed(6))
  console.log((zero/matriz).toFixed(6))
  
}

plusMinus(arr)