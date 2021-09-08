const randomColor = require('randomcolor');
const chalk = require('chalk');

/* const printHashes = () => {
	for (let rows = 1; rows <= 9; rows++) {
		const hash = '#';
		for (let column = 1; column <= 31; column++) {
			process.stdout.write(hash);
		}
		console.log('');
	}
};
printHashes();


//Function generating random Hex codes
function getRandomColor() {
	const letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		const randomHex = Math.floor(Math.random() * letters.length);
		color += letters[randomHex];
	}
	console.log(color);
}
getRandomColor();
 */

// Function that prints hashes
function printHashes() {
	const squareHashes = [];
	let result;
	for (let rows = 1; rows <= 9; rows++) {
		result = '';
		for (let cols = 1; cols <= 31; cols++) {
			result += '#';
		}
		// push the printed hashes and spaces to the empty array!
		squareHashes.push(result);
	}
	return squareHashes.join('\n');
}

// Function that prints random hex color codes!
function getRandomColor() {
	const letters = '0123456789ABCDEF';
	let newColor = '#';
	for (let i = 0; i < 6; i++) {
		const randomHex = Math.floor(Math.random() * letters.length);
		newColor += letters[randomHex];
	}
	return newColor;
}

// let currentColor = randomColor();
// console.log(chalk.hex(currentHexColor)(hashes));

// print random color of hashes when no argument is given!
if (!process.argv[2]) {
	const hashes = printHashes();
	const currentHexColor = getRandomColor();
	console.log(chalk.hex(currentHexColor)(hashes));

	// if argument is given check if it is a number or not!
} else if (process.argv.length >= 2) {
	// if it is not a number trigger this statement
	// the first argument and the third argument is needed to fire this process!
	if (isNaN(process.argv[2]) && isNaN(process.argv[3])) {
		// check if the first and second argument is true and fire!
		if (process.argv[2] && process.argv[3]) {
			const luminosity = process.argv[2];
			const hue = process.argv[3];

			// getting the hex color code for the entered luminosity and hue!
			const hashesColor = randomColor({
				luminosity: luminosity,
				hue: hue,
			});
			const hashes = printHashes();
			console.log(chalk.hex(hashesColor)(hashes));

			// check if only first argument is true and fire!
		} else {
			const hue = process.argv[2];
			const hashesColor = randomColor({
				hue: hue,
			});
			const hashes = printHashes();
			console.log(chalk.hex(hashesColor)(hashes));
		}
	} else {
		// if the given argument is a number, trigger this statement!
		const width = process.argv[2];
		const height = process.argv[3];
		const luminosity = process.argv[4];
		const hue = process.argv[5];

		function userPrintedHashes() {
			const squareHashes = [];
			let result;
			for (let rows = 1; rows <= height; rows++) {
				result = '';
				for (let cols = 1; cols <= width; cols++) {
					result += '#';
				}
				// push the printed hashes and spaces to the empty array!
				squareHashes.push(result);
			}
			return squareHashes.join('\n');
		}

		const hashesColor = randomColor({
			luminosity: luminosity,
			hue: hue,
		});

		const printedHashes = userPrintedHashes();
		console.log(chalk.hex(hashesColor)(printedHashes));
	}
}

/*
	// If nothing is entered by the user then a random color will be generated.
	if (!process.argv[2]) {
		const hashes = printHashes();
		const currentHexColor = getRandomColor();
		console.log(chalk.hex(currentHexColor)(hashes));

		// the first argument and the third argument is needed to fire this process!
	} else if (process.argv[2] && process.argv[3]) {
		const luminosity = process.argv[2];
		const hue = process.argv[3];

		// getting the hex color code for the entered luminosity and hue!
		const hashesColor = randomColor({
			luminosity: luminosity,
			hue: hue,
		});
		const hashes = printHashes();
		console.log(chalk.hex(hashesColor)(hashes));
	} else {
		const hue = process.argv[2];
		const hashesColor = randomColor({
			hue: hue,
		});
		const hashes = printHashes();
		console.log(chalk.hex(hashesColor)(hashes));
	}
 */
