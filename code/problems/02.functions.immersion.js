// Function Design II. Immersion [30 min]
module.exports = {
  mirror,
  palindrome,
  addV,
  hasV,
  repeatV,
  mirrorV,
  insertV,
  sortV,
  containsV
}
// 01. Diseña una función recursiva [mirror] para determinar
// si un número entero n es simétrico a otro número entero m
// Construye a partir de aquí la función [palindrome] que
// indica si un número es simétrico respecto a sí mismo.

function mirror (n, m) {
  return n === reverse(m)
}

function reverse (m) {
  return reverseAux(m, 0)
}

function reverseAux (m, acc) {
  return m === 0
    ? acc
    : reverseAux(Math.floor(m / 10), m % 10 + acc * 10)
}

function palindrome (n) {
  return n === reverse(n)
}

// 02. Diseña una función recursiva [addV] que dado un
// vector v calcule la suma de todos sus elementos.
// Por ejemplo, addV ([1,2,3]) = 1 + 2 + 3 = 6.

function addV (v) {
  return addVAux(v, 0)
}

function addVAux (v, index) {
  return index > v.length - 1
    ? 0
    : v[index] + addVAux(v, index + 1)
}

// 03. Diseña una función recursiva [hasV] para determinar
// si un elemento e está contendido dentro de un vector v.
// No pueden utilizarse funciones auxiliares disponibles
// dentro del prototipo Array.

function hasV (v, e) {
  return hasVAux(v, e, 0)
}

function hasVAux (v, e, index) {
  return index > v.length - 1
      ? false
      : v[index] === e || hasVAux(v, e, index + 1)
}

// 04. Diseña una función recursiva [repeatV] para
// determinar si dentro de un vector v se encuentra
// al menos un elemento repetido. No pueden utilizarse
// funcionesauxiliares disponibles dentro del prototipo Array.

function repeatV (v) {
  return repeatVAux(v, 0)
}
function repeatVAux (v, index) {
  return index > v.length - 1
    ? false
    : hasVAux(v, v[index], index + 1) || repeatVAux(v, index + 1)
}

// 05. Diseña una función recursiva [mirrorV] que determine si
// dos vectores son simétricos el uno con respecto al otro.
// Por ejemplo, [1,2,3] es simétrico a [3,2,1]. No pueden utilizarse
// funciones auxiliares disponibles dentro del prototipo Array.

function mirrorV (v, w) {
  return v.length === w.length && mirrorVAux(v, reverseV(w), 0)
}

function mirrorVAux (v, w, index) {
  return index > v.length - 1
    ? true
    : v[index] === w[index] && mirrorVAux(v, w, index + 1)
}

function reverseV (v) {
  return reverseVAux(v, v.length - 1, [])
}

function reverseVAux (v, index, acc) {
  return index < 0
    ? acc
    : reverseVAux(v, index - 1, acc.concat(v[index]))
}
// 06. Diseña una función recursiva [sortV] que ordene un vector v.
// Puedes utilizar la técnica de ordenación por inserción. Primero
// resuelve el problema de insertar un elemento en orden dentro de un
// array que se asume previamente ordenado. Diseña para ello la función
// [insertV]. Después, utilizando esa función, resuelve la función
// de ordenación.

function insertV (v, e) {
  return insertVAux(v, e, 0, [])
}

function insertVAux (v, e, index, ac) {
  return index > v.length - 1
    ? ac.concat(e)
    : v[index] < e
      ? insertVAux(v, e, index + 1, ac.concat(v[index]))
      : insertVAux(v, v[index], index + 1, ac.concat(e))
}
function sortV (v) {
  return sortVAux(v, 0, [])
}

function sortVAux (v, index, ac) {
  return index > v.length - 1
    ? ac
    : sortVAux(v, index + 1, insertV(ac, v[index]))
}

// Bonus 01. Diseña una función recursiva [containsV] que determine
// si un vector w está contenido dentro de otro vector mayor v.
// No pueden utilizarse funciones auxiliares disponibles dentro
// del prototipo Array.

function containsV (v, w) {
  return containsVAux(v, w, 0)
}
function containsVAux (v, w, p) {
  return p > v.length - w.length ?
        false :
        isHeadFrom(v, w, p, 0) || containsVAux(v, w, p + 1)
}
function isHeadFrom (v, w, p, q) {
  return q > w.length - 1 ?
        true :
        v[p] === w[q] && isHeadFrom(v, w, p + 1, q + 1)
}
