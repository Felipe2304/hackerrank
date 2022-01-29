const countApplesAndOranges = (s, t, a, b, apples, oranges) => {
  const numberApple = apples.filter((apple)=>{
    if (apple > 0) return apple + a >= s && apple + a <= t 
  })
  const numberOrange = oranges.filter((orange)=>{
    if (orange < 0) return orange + b >= s && orange + b <= t 
  })
  console.log(numberApple.length)
  console.log(numberOrange.length)
};

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
