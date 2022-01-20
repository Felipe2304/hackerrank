const bonAppetit = (bill, k, b) => {
  let totalSum = 0;
  let totalSumAna = 0;
  for (let i = 0; i < bill.length; i++) {
    totalSum += bill[i] / 2;
    if (i === k) continue;
    totalSumAna += bill[i] / 2;
  }
 
  if(totalSumAna === b){
    console.log('Bon appetit')
  }else{
    const diference = totalSum - totalSumAna
    console.log(diference)
  }
  
};

bonAppetit([3, 10, 2, 9], 1, 7);
