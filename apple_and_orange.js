const countApplesAndOranges = (s, t, a, b, apples, oranges) => {
  let quantityApples = 0;
  let quantityOranges = 0;

  for (let i = 0; i < apples.length; i++) {
    const numberApple = apples[i];
    if (numberApple > 0)
      if (numberApple + a >= s && numberApple + a <= t) quantityApples++;
  }

  for (let i = 0; i < oranges.length; i++) {
    const numberOrange = oranges[i];
    if (numberOrange < 0)
      if (numberOrange + b >= s && numberOrange + b <= t) quantityOranges++
  }
  console.log(quantityApples);
  console.log(quantityOranges);
};

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
