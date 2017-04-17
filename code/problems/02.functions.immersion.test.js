const test = require('tape')
const m = require('./02.functions.immersion')

test('mirror function output', ({plan, equal}) => {
  plan(5)
  let actual = m.mirror(1, 7)
  let expected = false
  equal(actual, expected, 'mirror() should return false if two numbers are not symmetrical')

  actual = m.mirror(0, 0)
  expected = true
  equal(actual, expected, 'mirror() should return true if both numbers are symmetrical')

  actual = m.mirror(123, 321)
  expected = true
  equal(actual, expected, 'mirror() should return true if both numbers are symmetrical')

  actual = m.mirror(123, 123)
  expected = false
  equal(actual, expected, 'mirror() should return false if two numbers are not symmetrical')

  actual = m.mirror(123, 132)
  expected = false
  equal(actual, expected, 'mirror() should return false if two numbers are not symmetrical')
})

test('palindrome function output', ({plan, equal}) => {
  plan(3)
  let actual = m.palindrome(123)
  let expected = false
  equal(actual, expected, 'palindrome() should return false when the number passed is not palindrome')

  actual = m.palindrome(12321)
  expected = true
  equal(actual, expected, 'palindrome() should return true when the number passed is palindrome')

  actual = m.palindrome(1221)
  expected = true
  equal(actual, expected, 'palindrome() should return true when the number passed is palindrome')
})

test('addV function output', ({plan, equal}) => {
  plan(1)
  const actual = m.addV([1, 2, 3, 4, 5])
  const expected = 15
  equal(actual, expected, 'addV() should return the sum of each element in a list passed')
})

test('hasV function output', ({plan, equal}) => {
  plan(2)
  let actual = m.hasV([1, 2, 3, 4, 5], 4)
  let expected = true
  equal(actual, expected, 'hasV() should return true when an element is present in a list')

  actual = m.hasV([1, 2, 3, 4, 5], 6)
  expected = false
  equal(actual, expected, 'hasV() should return false when an element is not present in a list')
})

test('repeatV function output', ({plan, equal}) => {
  plan(2)
  let actual = m.repeatV([1, 2, 3, 4, 5])
  let expected = false
  equal(actual, expected, 'repeatV() should return false when an element is not present in a list')

  actual = m.repeatV([1, 2, 3, 4, 3])
  expected = true
  equal(actual, expected, 'repeatV() should return true when an element is present in a list')
})

test('mirrorV function output', ({plan, equal}) => {
  plan(5)
  let actual = m.mirrorV([2,4,6], [])
  let expected = false
  equal(actual, expected, 'mirrorV() should return false when the lists passed are not symmetrical')

  actual = m.mirrorV([2,4,6], [2,4,6])
  expected = false
  equal(actual, expected, 'mirrorV() should return false when the lists passed are not symmetrical')

  actual = m.mirrorV([2,4,6], [6,4])
  expected = false
  equal(actual, expected, 'mirrorV() should return false when the lists passed are not symmetrical')

  actual = m.mirrorV([2,4,6], [6,4,2])
  expected = true
  equal(actual, expected, 'mirrorV() should return true when the lists passed are symmetrical')

  actual = m.mirrorV([2,4,6], [6,4,2,7])
  expected = false
  equal(actual, expected, 'mirrorV() should return false when the lists passed are not symmetrical')
})

test('sortV function output', ({plan, deepEqual}) => {
  plan(4)
  let actual = m.sortV([1, 3, 2, 4, 8, 1])
  let expected = [ 1, 1, 2, 3, 4, 8 ]
  deepEqual(actual, expected, 'sortV() should return an ordered list when a list of numbers is passed')

  actual = m.sortV([2, 4, 6, 8, 3, 0])
  expected = [ 0, 2, 3, 4, 6, 8 ]
  deepEqual(actual, expected, 'sortV() should return an ordered list when a list of numbers is passed')

  actual = m.sortV([1, 2, 3, 4, 5, 6])
  expected = [ 1, 2, 3, 4, 5, 6 ]
  deepEqual(actual, expected, 'sortV() should return an ordered list when a list of numbers is passed')

  actual = m.sortV([6, 5, 4, 3, 2, 1])
  expected = [ 1, 2, 3, 4, 5, 6 ]
  deepEqual(actual, expected, 'sortV() should return an ordered list when a list of numbers is passed')
})
test('containsV function output', ({plan, equal}) => {
  plan(18)
  let actual = m.containsV([],[])
  let expected = true
  equal(actual, expected, 'containsV() should return true if first list passed contains the second list')

  actual = m.containsV([], [1])
  expected = false
  equal(actual, expected, 'containsV() should return false if first list passed does not contains the second list')

  actual = m.containsV([], [1,2])
  expected = false
  equal(actual, expected, 'containsV() should return false if first list passed does not contains the second list')

  actual = m.containsV([1], [1])
  expected = true
  equal(actual, expected, 'containsV() should return true if first list passed contains the second list')

  actual = m.containsV([1], [2])
  expected = false
  equal(actual, expected, 'containsV() should return false if first list passed does not contains the second list')

  actual = m.containsV([1,2], [])
  expected = true
  equal(actual, expected, 'containsV() should return true if first list passed contains the second list')

  actual = m.containsV([1,2], [1])
  expected = true
  equal(actual, expected, 'containsV() should return true if first list passed contains the second list')

  actual = m.containsV([1,2], [2])
  expected = true
  equal(actual, expected, 'containsV() should return true if first list passed contains the second list')

  actual = m.containsV([1,2], [3])
  expected = false
  equal(actual, expected, 'containsV() should return false if first list passed does not contains the second list')

  actual = m.containsV([1,2], [1,2])
  expected = true
  equal(actual, expected, 'containsV() should return true if first list passed contains the second list')

  actual = m.containsV([1,2], [2,3])
  expected = false
  equal(actual, expected, 'containsV() should return false if first list passed does not contains the second list')

  actual = m.containsV([1,2], [1,2,3])
  expected = false
  equal(actual, expected, 'containsV() should return false if first list passed does not contains the second list')

  actual = m.containsV([1,2,3], [1,2])
  expected = true
  equal(actual, expected, 'containsV() should return true if first list passed contains the second list')

  actual = m.containsV([1,2,3], [2,3])
  expected = true
  equal(actual, expected, 'containsV() should return true if first list passed contains the second list')

  actual = m.containsV([1,2,3,4], [1,2])
  expected = true
  equal(actual, expected, 'containsV() should return true if first list passed contains the second list')

  actual = m.containsV([1,2,3,4], [2,3])
  expected = true
  equal(actual, expected, 'containsV() should return true if first list passed contains the second list')

  actual = m.containsV([1,2,3,4], [3,4])
  expected = true
  equal(actual, expected, 'containsV() should return true if first list passed contains the second list')

  actual = m.containsV([1,2,3,4], [1,3])
  expected = false
  equal(actual, expected, 'containsV() should return false if first list passed does not contains the second list')
})
