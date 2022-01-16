const checkResult = (a, b) => {
  if (a === b) console.log("resposta correta", b);
  else console.log("resposta errada", b, "deveria ser", a);
};


function birthday(s, d, m) {
  let counter = 0;
  for (let i = 0; i < s.length; i++) {
    let sum = 0;

    for (let a = i; a < i + m; a++) {
      if (s[a] !== undefined) {
        sum += s[a];
      }
    }
    console.log(sum)
    if(sum === d){
      counter++
    }
  }
  return counter
}

const arr1 = [1,2,1,3,2]
const arr2 = [1,1,1,1,1,1];

const result1 = birthday(arr1, 4, 2);
checkResult(7, result1);

const result2 = birthday(arr2, 3, 2);
checkResult(0, result2);

