const checkResult = (a, b) => {
  if (a === b) console.log("resposta correta", b);
  else console.log("resposta errada", b, "deveria ser", a);
};

const designerPdfViewer = (h, word) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const letter = word.split("");
  const listIndex = [];

  for (let i = 0; i < letter.length; i++) {
    const positionLetter = alphabet.indexOf(letter[i]);
    for (let a = 0; a < h.length; a++) {
      if (a === positionLetter) listIndex.push(h[a]);
    }
  }
  let higheNumber = Math.max(...listIndex);
  return higheNumber * 1 * word.length;
};
const arr = [ 6, 5, 7, 3, 6, 7, 3, 4, 4, 2, 3, 7, 1, 3, 7, 4, 6, 1, 2, 4, 3, 3, 1, 1, 3, 5,];
const resulted = designerPdfViewer(arr, "zbkkfhwplj");
checkResult(70, resulted);
