const listaDeGrades = [73,67,38 , 33];

const conversaoDeGrades = (grades) => {

  //for
  // const novaLista = []
  // for (let i = 0; i < grades.length; i++) {
  //   let nota = grades[i];
  //   if (nota >= 38) {
  //     let notaArredondada = Math.ceil(nota / 5) * 5;
  //     let diferenca = notaArredondada - nota;

  //     if (diferenca < 3) {
  //       nota += diferenca
  //     }
  //   }
  //   novaLista.push(nota)
  // }

  // console.log(novaLista)
  // return novaLista

  //map
  const newList = grades.map((note) => {
    const ceil = Math.ceil(note / 5) * 5;
    if (note >= 38 && ceil - note < 3) return ceil;

    return note;
  });

  return newList;
};
conversaoDeGrades(listaDeGrades);
