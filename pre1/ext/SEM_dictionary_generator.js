_import("https://elsl.mwashcdn.ml/pre1/ext/base_to_number.js");
function dictGen (pass) {
	let _pass = pass;
	if (_pass.constructor == String) {
		if (_pass.length <= 6) {
			while (_pass.length < 6) {
				_pass = "0" + _pass;
			}
			let key = b2n(_pass);
			let key1 = Math.floor(key / 1000000);
			let key2 = key % 1000000;
			let now = 0;
			let odict = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "+", "/"];;
			let ndict = [];
			while (now < 64) {
				Dict = Math.floor((0.5 * Math.sin(key1 * now - key2) + 0.5) * odict.length);
				ndict[now] = odict[Dict];
				odict.splice(Dict, 1);
				now ++;
			}
			return ndict;
		}
	}
}
