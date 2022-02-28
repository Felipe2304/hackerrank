const scoreList = [10,5,20,20,4,5,2,25,1];
const breakRecords = (scores) => {
  const  records = []

  let highestScore = scores[0];
  let loweScore = scores[0];

  const positiveRecords = scores.reduce((acc , numbers)=>{
    if(highestScore < numbers){
      highestScore = numbers
      acc++
    }
    return acc
  }, 0)

  const negativeRecords = scores.reduce((acc , numbers)=>{
    if(loweScore > numbers){
      loweScore = numbers
      acc++
    }
    
    return acc
  }, 0)
  
  return [...records , positiveRecords , negativeRecords]
};

breakRecords(scoreList);
// retornar um array de dois iteiros que simboliza o record de maior pontuação no indice 0 e manor no indice 1



// const records = [];

// let min = 0;
// let max = 0;

// const newList = scores.filter((score, index) => {
//   return scores.indexOf(score) == index;
// });

// let loweScore = newList[0];
// let highestScore = newList[0];

// for (let i = 0; i < newList.length; i++) {
//   if (loweScore > newList[i]) {
//     loweScore = newList[i];
//     min++;
//   }
  
//   if (highestScore < newList[i]) {
//     highestScore = newList[i];
//     max++;
//   }
// }

// records.push(max, min);

// console.log(records)
// return records;
