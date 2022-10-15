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
const range = (start, end) => {
  //base case
  if (end < start) return [];
  //recursive step: create an empty array and assign start at index 0
  //if our start parameter is less then our end update our current to our start paremeter
  //increment from start up until end by 1
  let current = [start]
  if ([start] < end){
    current = [start];
    [start]++
  }
  // recursive case
  return current + range(start, end)
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}


