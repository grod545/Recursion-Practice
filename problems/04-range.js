/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []

Understand the problem:
input: start and end point
output: an array of numbers in the range from start to end

Create a plan:
1. define a function range that takes in 'start' and 'end' as parameters
2. create a base case to work towards
  -if end < start return an empty array
3. create a recurisve case
  -create a variable 'current' to hold our start element in our given array
  -if start < end update our 'current' value to start
  -increment from start moving up by 1 each time
4. return our current value and add our function to it
***********************************************************************/
function range(start, end){
// recursive case
if (start < end){
  let current = [start]                           //[start] = [1][2][3][4][5]
  start++                                         //        +1-2,+1-3,+1-4      -we stop at 5 becaue end is not inclusivec
  return current.concat(range(start, end))        //we can use .concat method because we initialized current as an array and our function returns an array
  } else {
    // base case
    return [];
  }

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
