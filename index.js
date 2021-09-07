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

console.log(process.argv);
