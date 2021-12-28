const candles = [3,2,1,3]

let maiorValor = Math.max(...candles)
let total = 0
for(let i = 0 ; i < candles.length ; i++){
  if(candles[i] === maiorValor){
    total++
  }
}

console.log(total)