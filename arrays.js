var stringArray = ["cat", "dog", "pig"];
var numberArray = [4, 7, 9, 12];
var booleanArray = [false, false, true, false]
// This method will remove the last element of the string array and, because I'm using console.log, print that final element.
console.log(stringArray.pop())
// This method will print a new array beginning from the second index position of the number array (9).
console.log(numberArray.slice(2))
// This method will add two, new values to the end of the boolean array and then print out the resulting, modified array.
booleanArray.push(true, true)
console.log(booleanArray)