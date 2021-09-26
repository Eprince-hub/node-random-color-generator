const randomColor = require('randomcolor');
const chalk = require('chalk');
const prompt = require('prompt-sync')();

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
const hexColor = getRandomColor();
// console.log(chalk.hex(currentHexColor)(hashes));
// print random color of hashes when no argument is given!

// ########
if (!process.argv[2]) {
  const hashes = `
  ###############################
  ###############################
  ###############################
  #####                     #####
  #####      (${hexColor})      #####
  #####                     #####
  ###############################
  ###############################
  ###############################

  `; // printHashes();
  console.log(chalk.hex(hexColor)(hashes));

  // if argument is given check if it is a number or not!
} else if (process.argv.length >= 2) {
  // if it is not a number trigger this statement
  // the first argument and the third argument is needed to fire this process!
  if (isNaN(process.argv[2]) && isNaN(process.argv[3])) {
    // if it is not a number and the user put ask the do while loop will trigger!

    if (process.argv[2] === 'ask') {
      let userPrompt;
      do {
        userPrompt = prompt('Please enter a valid hue and luminosity!: ');
      } while (userPrompt === 'ask');
    }
    // check if the first and second argument is true and fire!
    if (process.argv[2] && process.argv[3]) {
      const hue = process.argv[2];
      const luminosity = process.argv[3];

      // getting the hex color code for the entered luminosity and hue!
      const hashesColor = randomColor({
        luminosity: luminosity,
        hue: hue,
      });

      const hashes = `
  ###############################
  ###############################
  ###############################
  #####                     #####
  #####      (${hashesColor})      #####
  #####                     #####
  ###############################
  ###############################
  ###############################

  `;

      // const hashes = printHashes();
      console.log(chalk.hex(hashesColor)(hashes));

      // check if only first argument is true and fire!
    } else {
      const hue = process.argv[2];
      const hashesColor = randomColor({
        hue: hue,
      });

      const hashes = `
  ###############################
  ###############################
  ###############################
  #####                     #####
  #####      (${hashesColor})      #####
  #####                     #####
  ###############################
  ###############################
  ###############################

  `;
      // const hashes = printHashes();
      console.log(chalk.hex(hashesColor)(hashes));
    }
  } else {
    // if the given argument is a number, trigger this statement!
    const width = process.argv[2];
    const height = process.argv[3];
    const hue = process.argv[4];
    const luminosity = process.argv[5];
    const spaceWidth = 21;
    const spaceHeight = 3;

    function printRectangle(rows, cols) {
      let result = '';
      const borderWidth = (cols - spaceWidth) / 2;
      const borderHeight = (rows - spaceHeight) / 2;

      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          const rowIsBorder =
            i < borderHeight || i >= borderHeight + spaceHeight;
          const colIsBorder = j < borderWidth || j >= borderWidth + spaceWidth;

          result += rowIsBorder || colIsBorder ? '#' : ' ';
        }

        result += '\n';
      }

      // console.log(result);
      return result;
    }

    const hashesColor = randomColor({
      luminosity: luminosity,
      hue: hue,
    });

    const printedHashes = printRectangle(height, width);
    console.log(chalk.hex(hashesColor)(printedHashes));
  }
}

/*
if (input1 === 'ask') {
  do {
    desiredHue = readline.question(`Please enter a color\n`).toLowerCase();
    customHue = getCustomHue(desiredHue);
    if (!customHue) {
      console.log('Color not found. Please choose another.');
    }
  } while (!customHue); // if no valid color, customHue will not have been set, asks again

  if (customHue !== 'white' && customHue !== 'black') {
    // (if the hue value was "white" or "black", don't ask for lightness)
    desiredLightness = readline.question(`Light or dark?\n`).toLowerCase();
    customLightness = getCustomLightness(desiredLightness);
  }
}  */

/*
    do {
      const userPrompt =  prompt('Please enter a valid hue and luminosity!: ');
    } while (process.argv[2] === 'ask');
 */

/* function userPrintedHashes() {
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
    } */

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
/* function printHashes() {
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
} */

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
