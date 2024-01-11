const listaLivros = require('./array');

let i = 0;
function quickSort(arr) {
  if (arr.length <= 1) {
      return arr;
  }


  console.log("\nInteração: " ,i);
  i++;
  const pivot = arr[Math.floor(arr.length / 2)];
  console.log('PIVO ',pivot);
  const left = arr.filter(element => element.preco < pivot.preco);
  console.log('MENOR ',left);
  const middle = arr.filter(element => element.preco === pivot.preco);
  console.log('MEIO ',middle);
  const right = arr.filter(element => element.preco > pivot.preco);
  console.log('MAIOR ', right);
  
  return [...quickSort(left), ...middle, ...quickSort(right)];

}

console.log(quickSort(listaLivros));


