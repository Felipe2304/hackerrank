const catAndMouse = (x, y, z) => {
  const catA = Math.abs(z - x);
  const catB = Math.abs(z - y);
  if (catA < catB) console.log("Cat A");
  if (catA > catB) console.log("Cat B");
  if (catA === catB) console.log("Mouse C");
};
catAndMouse(1, 2, 3);
catAndMouse(1, 3, 2);
