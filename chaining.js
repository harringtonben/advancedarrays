// Using one single line of JavaScript code, complete the following tasks on the array of integers below.

var numbers = [888, 8008, 7734, -79, 0, 2];

// 1.  Sort the numbers in descending order (10, 9, 8, 7, etc).
var sortedShit = numbers.sort(function(first,second){return first - second}).reverse();

console.log(sortedShit);
// 2.  Remove any integers greater than 19.
var howBigAmI = numbers.filter(function(number) {
	if (number > 19) {
		return true;
	}
});
console.log(howBigAmI);
// 3.  Multiply each remaining number by 1.5 and then subtract 1.

var gettingThere = howBigAmI.map(function(fruit) {
	return (fruit * 1.5) -1;
})

console.log(gettingThere);
// 4.  Then output (either in the DOM or the console) the sum of all the resulting numbers.

var theHell = gettingThere.reduce(function(accumulation, currentValue) {
	return accumulation + currentValue;
});
console.log(theHell);