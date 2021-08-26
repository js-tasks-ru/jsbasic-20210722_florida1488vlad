function getMinMax(str) {
	let arr = {}

	let numbers = str.split(' ').filter(item => !isNaN(item));
	let sortedNumbers = numbers.sort((a, b) => a - b);
	let result =
		arr.min = +sortedNumbers[0];
	arr.max = +sortedNumbers[sortedNumbers.length - 1];
	return arr;
};