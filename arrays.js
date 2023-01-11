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

// The second element in the string array is "pig"
// Performing a slice on the number array beginning with the element in the 0 index position and ending with the element in the 2 index position will return an array of [4, 7, 9]