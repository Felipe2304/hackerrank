const listaDeGrades = [73, 67, 38, 33];

const conversaoDeGrades = (grades) => {
  const novaLista = []
  for (let i = 0; i < grades.length; i++) {
    let nota = grades[i];
    if (nota >= 38) {
      let notaArredondada = Math.ceil(nota / 5) * 5;
      let diferenca = notaArredondada - nota;

      if (diferenca < 3) {
        nota += diferenca
      } 
    }
    novaLista.push(nota)
  }

  return novaLista
};
conversaoDeGrades(listaDeGrades);

