function generateRandomNumber(min, max) {
	// Generate a random decimal between 0 (inclusive) and 1 (exclusive)
	const randomDecimal = Math.random();

	// Scale and shift the decimal to fit within the desired range
	const randomNumber = Math.floor(randomDecimal * (max - min + 1) + min);

	return randomNumber;
}

console.log(generateRandomNumber(1300, 2800));
