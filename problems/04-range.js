/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []
***********************************************************************/
//input: two numbers
// output" an array of all numbers in the range between the two numbers
// 1.

function range(start, end) {
  let arr = [];
  let current = [start]
  if (start < end){
    let current = [start]
    start++
    return current.concat(range(start, end))
  } 
  return arr;
}
range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}
