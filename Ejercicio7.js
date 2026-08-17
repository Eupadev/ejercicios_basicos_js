/*
Así lo había solucionado:

function greaterNumber(numberOne , numberTwo) {
  if(numberOne <= numberTwo){
    console.log(numberTwo)
  } else {
    console.log(numberOne)
  }
}

console.log(greaterNumber(1, 5));

Pero investigando más he visto que tambien podría haber usado el metodo math y hacerlo más corto:
*/

function greaterNumber(numberOne, numberTwo) {
    return Math.max(numberOne, numberTwo);
}

console.log(greaterNumber(1, 5));