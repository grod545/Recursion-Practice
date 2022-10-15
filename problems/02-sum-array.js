/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

Examples:

sumArray([1, 2, 3]); //  6
sumArray([0, 1, -3]); //  -2
sumArray([1, 2, 3, 4, 5]); // 15

Understand the problem:
input: an array of intergers
ouput: sum of all integers added together

Create a plan:
1. define a function sumArray that takes in an arr of integers
2. create a base case to return from our function of the length of the arr has reached 0
  -if arr.length is 0 return a value of 0
3. create a recursive case to work towards our base case
  -grab the elements in the arr starting at index 1 using .slice method
  -add the elements returned from our .slice method to the remaining elements at index 0
4. return our function with our recursive step implemented
***********************************************************************/
function sumArray(arr){
  //base case
  if (arr.length === 0) return 0;
  //grab our current element so we can add it to our remanining elements
  let el = arr.slice(1)
  //recursive case
  return sumArray(el + arr[0])
 }



/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumArray;
} catch (e) {
  module.exports = null;
}
