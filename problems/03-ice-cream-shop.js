/***********************************************************************
Write a recursive function `iceCreamShop(flavors, favorite)` that takes in an
array of ice cream flavors available at the ice cream shop, as well as the
user's favorite ice cream flavor. Recursively find out whether or not the shop
offers their favorite flavor.

Examples:
iceCreamShop(['vanilla', 'strawberry'], 'blue moon'); // false
iceCreamShop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea'); // true
iceCreamShop(['cookies n cream', 'blue moon', 'superman', 'honey lavender', 'sea salt caramel'], 'pistachio'); // false
iceCreamShop(['moose tracks'], 'moose tracks'); // true
iceCreamShop([], 'honey lavender'); // false


Understand the problem:
input: an array of flavors and users favorite flavor
output: a boolean indicating wether the users favorite flavor is in the flavors array

Create a plan:
1. define a function iceCreamShop that takes in 'flavors' and 'favorite' as parameters
2. create a base case to work towards
  *if flavors[0] is equal to favorite flavor return true*
  -alternatively if flavors.length = 0 we will return false since there are no more flavors to compare to
3. create our recursive step
  *use .slice() method to grab the rest of our elements starting at index 1*
4. return our recursive function witht the arguments of our .slice method and favorite to iterate through the array and compare to favorite flavor
***********************************************************************/
const iceCreamShop = (flavors, favorite) => {
  //base case 1 to return true if favorite matches flavors current element
  if (flavors[0] === favorite) return true;
  //base case 2 to return false if there are no more elements to compare to favorite
  if (flavors.length === 0) return false;
  //recursive case grabs the rest of our flavors starting at index 1 and compares them to favorite by calling iceCreamShop from within itself. Recursion baby!!
  return iceCreamShop(flavors.slice(1), favorite)

}



/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = iceCreamShop;
} catch (e) {
  module.exports = null;
}



