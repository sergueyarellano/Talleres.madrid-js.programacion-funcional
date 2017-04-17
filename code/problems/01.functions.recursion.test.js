const test = require('tape')
const m = require('./01.functions.recursion.js')

test('factorial function output', ({plan, equal}) => {
  plan(1)
  const actual = m.factorial(5)
  const expected = 120
  equal(actual, expected, 'factorial() should return the factorial of a number')
})

test('fibonacci function output', ({plan, equal}) => {
  plan(1)
  const actual = m.fibonacci(10)
  const expected = 55
  equal(actual, expected, 'fibonacci() should return the umpteenth element of a fibonacci sequence')
})

test('pow function output', ({plan, equal}) => {
  plan(2)
  let actual = m.pow(2, 6)
  let expected = 64
  equal(actual, expected, 'pow() should return the number passed as first arg to the power of the second arg')

  actual = m.pow(3, 6)
  expected = 729
  equal(actual, expected, 'pow() should return the number passed as first arg to the power of the second arg')
})

test('even function output', ({plan, equal}) => {
  plan(2)
  let actual = m.even(8)
  let expected = true
  equal(actual, expected, 'even() should return true if a number passed is even')

  actual = m.even(17)
  expected = false
  equal(actual, expected, 'even() should return false if a number passed is not even')
})

test('addUp function output', ({plan, equal}) => {
  plan(1)
  const actual = m.addUp(5)
  const expected = 15
  equal(actual, expected, 'addUp() should return the sum of the first 5 integers')
})

test('digits function output', ({plan, equal}) => {
  plan(3)
  let actual = m.digits(5)
  let expected = 5
  equal(actual, expected, 'digits() should return the sum of the digits of an integer')

  actual = m.digits(25)
  expected = 7
  equal(actual, expected, 'digits() should return the sum of the digits of an integer')

  actual = m.digits(125)
  expected = 8
  equal(actual, expected, 'digits() should return the sum of the digits of an integer')
})
