// Function Design I. Recursion [30 min]

module.exports = {
  factorial,
  fibonacci,
  pow,
  even,
  addUp,
  digits
}

// 01. Diseña una función recursiva para calcular n!
// n! se computa como el producto de todos los números
// naturales desde 1 hasta n.

function factorial (n) {
  return n === 1 ?
    1 :
    n * factorial(n - 1)
}

// 02. Diseña una función recursiva para calcular el
// n-esimo término de la sucesión de Fibonacci. Dicho
// término se obtiene como la suma de los dos términos
// anteriores en la sucesión.

function fibonacci (n) {
  return n < 2
    ? n
    : fibonacci(n - 1) + fibonacci(n - 2)
}

// 03. Diseña una función recursiva para calcular
// la potencia de un numero b elevado al exponente e.
// El computo de b elevado a e se obtiene como el
// producto de b con sigo mismo e veces.

function pow (b, e) {
  return e === 1
    ? b
    : b * pow(b, e - 1)
}

// 04. Diseña dos predicados lógicos [even] y [odd] que
// indiquen si un número n pasado como argumente es o no
// par o impar respectivamente. En el diseño de estas
// funciones no puede utilizarse la operación de módulo %.

function even (n) {
  return n === 1
    ? false
    : !even(n - 1)
}

// 05. Diseña una función recursiva [addUp] que devuelva
// la suma de los n primeros números naturales. Por ejemplo
// addUp (3) = 1 + 2 + 3 = 6.

function addUp (n) {
  return n === 1
    ? 1
    : n + addUp(n - 1)
}

// 06. Diseña una función recursiva [digits] que sume los dígitos
// que tiene un número entero n pasado como parámetro. Por ejemplo,
// digits (125) = 1 + 2 + 5 = 8.

function digits (n) {
  return n < 10
    ? n
    : n%10 + digits(Math.floor(n/10))
}
