const MORSE_TABLE = {
	".-": "a",
	"-...": "b",
	"-.-.": "c",
	"-..": "d",
	".": "e",
	"..-.": "f",
	"--.": "g",
	"....": "h",
	"..": "i",
	".---": "j",
	"-.-": "k",
	".-..": "l",
	"--": "m",
	"-.": "n",
	"---": "o",
	".--.": "p",
	"--.-": "q",
	".-.": "r",
	"...": "s",
	"-": "t",
	"..-": "u",
	"...-": "v",
	".--": "w",
	"-..-": "x",
	"-.--": "y",
	"--..": "z",
	".----": "1",
	"..---": "2",
	"...--": "3",
	"....-": "4",
	".....": "5",
	"-....": "6",
	"--...": "7",
	"---..": "8",
	"----.": "9",
	"-----": "0",
};

function decode(expr) {
	let decodedMessage = "";
	for (let i = 0; i < expr.length; i += 10) {
		const encodedChar = expr.slice(i, i + 10);

		if (encodedChar === "**********") {
			decodedMessage += " ";
		} else {
			let morseChar = "";
			for (let j = 0; j < encodedChar.length; j += 2) {
				const binaryPair = encodedChar.slice(j, j + 2);
				if (binaryPair === "10") morseChar += ".";
				if (binaryPair === "11") morseChar += "-";
			}
			decodedMessage += MORSE_TABLE[morseChar] || "";
		}
	}
	return decodedMessage;
}

module.exports = {
	decode,
};
