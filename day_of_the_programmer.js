const checkResult = (a, b) => {
  if (a === b) console.log("resposta correta", b);
  else console.log("resposta errada", b, "deveria ser", a);
};

const dayOfProgrammer = (year) => {
  let date = ["00", "09", year];

  if (year >= 1700 && year <= 1917) {
    if (year % 4 === 0) 
    date[0] = (256 - 244).toString();
    else {
      date[0] = 256 - 243;
    }
  } else if (year >= 1919 && year <= 2700) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
      date[0] = (256 - 244).toString();
    else {
      date[0] = 256 - 243;
    }
  } else if (year === 1918) {
    date[0] = "26";
  }
  return date.join(".");
};

const resulted = dayOfProgrammer(2015);
checkResult("26.09.1918", resulted);
