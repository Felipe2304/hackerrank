const horario = "07:05:45PM";

const conversaoHoras = (s) => {
  let sigla = s.includes("PM");

  if (sigla) {
    s = s.split(":");
    if (s[0] < "12") s[0] = (parseInt(s[0]) + 12).toString();
    s = s.join(":");
  } else {
    s = s.split(":");
    if (s[0] === "12") s[0] = "00";
    s = s.join(":");
  }

  return (s = s.substring(0, 8));
};

conversaoHoras(horario);