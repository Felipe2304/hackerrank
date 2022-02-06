const checkResult = (a, b) => {
  if (a === b) console.log("resposta correta", b);
  else console.log("resposta errada", b, "deveria ser", a);
};
function chocolateFeast(n, c, m) {
  let chocolatesComprados = Math.floor(n / c);
  if (chocolatesComprados < m) {
    return chocolatesComprados
  }
  if (chocolatesComprados >= m) {
    let chocolatesGanhos = Math.floor(chocolatesComprados / m);
    let embalagensSobradas = chocolatesComprados % m;
    chocolatesGanhos += Math.floor((embalagensSobradas + chocolatesGanhos) / m);
    
    return chocolatesComprados + chocolatesGanhos;
  }
  
}

const resulted = chocolateFeast(10,2,5);
checkResult(6,resulted)


