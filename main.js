var fruits = ["apple", "banana", "cherry"];

// 1A: Write a function called outputFruitOld that consoles every fruit in a fruit array.

function outputFruitOld(array) {
	for (var i = 0; i < array.length; i++) {
		console.log('output for 1A, list of fruits is:',array[i])
	}
}
outputFruitOld(fruits)

// 1B: Rewrite using forEach array method

// using callback function

fruits.forEach(listFruits);

function listFruits(fruit, index, array) {
	if (index === 2) {
		console.log(fruit)
	}
	// console.log('output for 1A, list of fruits is:',fruit);
}

// using anonymous function

fruits.forEach(function(item) {
	console.log(item);
});

// 2A: Write a function called backwardFruitsOld that reverses the letters in each word in the fruits array.

function backwardFruitsOld(array) {
	var newArray = [];
	for (var i = 0; i < array.length; i++) {
		newArray.push(array[i].split('').reverse().join(''));	
	}
	return newArray;
}
console.log(backwardFruitsOld(fruits));

// 2B: Rewrite using map array method

var anotherArray = fruits.map(function(fruit) {
	return fruit.split('').reverse().join('');
});

console.log(anotherArray);
console.log(fruits);

//with a callback function

function splitter(item) {
	return item.split('').reverse().join('');
}

console.log(fruits.map(splitter));


// 3A: Write a function called fiveLettersOnlyOld that only returns fruits that have 5 letters.
// 3B: Rewrite using filter array method

var numbers = [0, 1, 2, 3, 4];

// 4A: Write a function called addzOld that returns the sum of an array.
// 4B: Rewrite using reduce array method