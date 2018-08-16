// @Module : elsl.ext.random
// @Dependencies : none
function Random() {
	this._seed = 1;
	this._list = [];
	this._count = 0;
	this.seed = function (seed) {
		if (seed > 1 && seed < 4294967255 && seed % 1 == 0) {
			this._seed = seed;
		} else {
			console.error("[elsl.ext.random] Invalid seed! It should not be greater than 2^32-1, smaller than 1, and must be an integer.");
		}
	}
	this.open = function () {
	}
	this.range = function (start, end) {
		if (start.constructor == Number && end.constructor == Number) {
			this.range.s = start;
			this.range.e = end;
		} else {
			console.log("[elsl.ext.random] Invalid range value.");
		}
	}
	this.get = function () {
		let key1 = Math.floor(this._seed / 100000);
		let key2 = this._seed % 100000;
		let random = 0.5 * Math.sin(key2 * (this._count + 1) - key1) + 0.5;
		console.log(key1 + " | " + key2 + " | " + random);
		this._count ++;
	}
}
