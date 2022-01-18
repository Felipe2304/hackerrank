const checkResult = (a, b) => {
  if (a === b) console.log("resposta correta", b);
  else console.log("resposta errada", b, "deveria ser", a);
};

const migratoryBirds = (arr) => {
  arr = arr.sort()
  const newList = arr.filter((element, index) => {
    return arr.indexOf(element) === index;
  });
  let maxNumber = 0;
  let resultedId = 0;
  for (let i = 0; i < newList.length; i++) {
    let quantity = 0;
    for (let a = 0; a < arr.length; a++) {
      if (arr[a] === newList[i]) {
        quantity++;
      }
    }
    if (quantity > maxNumber) {
      maxNumber = quantity;
      resultedId = newList[i];
    }
  }
  return resultedId
};
const arr = [1,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,2,3,3,3,3,3]
const result = migratoryBirds(arr)
checkResult(2,result)