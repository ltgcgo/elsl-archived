b2n = function (t) {
	let dict = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "_", "-"];
	let numst = 0;
	let count = 0;
	while (count < 6) {
		numst += dict.indexOf(t[count]) * Math.pow(64,5-count);
		count ++;
	}
	return numst;
}
