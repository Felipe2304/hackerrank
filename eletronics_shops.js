const checkResult = (a, b) => {
  if (a === b) console.log("resposta correta", b);
  else console.log("resposta errada", b, "deveria ser", a);
};

function getMoneySpent(keyboards, drives, b) {
  const priceList = [];
  for (let i = 0; i < keyboards.length; i++) {
    for (let a = 0; a < drives.length; a++) {
      const sum = drives[a] + keyboards[i];
      priceList.push(sum);
    }
  }
  const filterItens = priceList.filter((value) => {
    return value <= b;
  });
  const maxValue = Math.max(...filterItens);
  return (filterItens.length === 0 )? -1 : maxValue
}
const keyBoardsList = [40, 50, 60];
const drivesList = [5, 8, 12];
const resulted = getMoneySpent(keyBoardsList, drivesList, 60);
checkResult(58, resulted);
