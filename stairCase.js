const n = 6

for(let i = 1 ; i <= n ; i++ ){
  let symbol = ''

  for(let a = 0 ; a < n ; a++){
    if(a < n - i) symbol += ' '
    else symbol+= '#'
  }
  console.log(symbol)
}