/***********************************************************************
Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.

Examples:

sumToN(5) // returns 15
sumToN(1)  // returns 1
sumToN(9)  // returns 45
sumToN(-8)  // returns null

Understand the problem:
input: a number
output: the sum of all numbers from 0 up to n

create a plan:
1. define a function sumToN that takes in a n
2. create a base case that will allow us a target for our recursion to work towards
  *if n is equal to 0 or n is a negative integer we should return null*
3. create a recursive case to work towards our base case
  *(n-1) + n will give us: n - 1 down to zero and add it to n giving us our total sum
  *pass our recursiv step ^ into our function
4. return our recursive function
***********************************************************************/
let sumToN = (n) => {
  //base case
  if (n <= 0) return null;
  //recursive case: return our original function inputting (n - 1) as our arg
  // this makes sure we work towards our base case of 0
  let res = sumToN(n - 1) + n
  return res;
}
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumToN;
} catch (e) {
  module.exports = null;
}
