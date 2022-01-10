const kangaroo = (x1, v1, x2, v2) => {
  const restDivision = (x2 - x1) % (v1 - v2);
  if(v1 < v2 || restDivision > 0 || v1 - v2 == 0){
    return 'NO'
  }else if (restDivision === 0){
    return 'YES'
  }
};
kangaroo(35 ,1 ,45 ,3);
