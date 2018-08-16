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
	this.open = function (restore) {
		let count = 0;
		while (count < this.range.e - this.range.s) {
			this._list[count] = count + this.range.s;
			count ++;
		}
		if (restore == true) {
			this._count = 0;
		}
	}
	this.range = function (start, end) {
		if (start.constructor == Number && end.constructor == Number && start <= end) {
			this.range.s = start;
			this.range.e = end;
		} else {
			console.log("[elsl.ext.random] Invalid range value.");
		}
	}
	this.get = function () {
		let key1 = Math.floor(this._seed / 100000) / 100;
		let key2 = this._seed % 100000 / 100;
		let random = 0.5 * Math.sin(key2 * (this._count + 1) - key1) + 0.5;
		if (this._list != []) {
			let output = this._list[Math.floor(random * this._list.length)];
			this._list.splice(Math.floor(random * this._list.length), 1);
			this._count ++;
			return output;
		} else {
			console.error("[elsl.ext.random] Use .open() to refresh the random list!");
		}
	}
	this.visualize = function (cvs) {
		let pic = cvs.getContext("2d");
		let width = cvs.width;
		let height = cvs.height;
		let max = width * height;
		let count = 0;
		this.range(0,255);
		this.open(true);
		while (count < max) {
			let val = this.get();
			pic.fillStyle = "rgb(" + val + "," + val + "," + val + ")";
			pic.fillRect(count % width, Math.floor(count / width), 1, 1);
			this.open();
			count ++;
		}
	}
}
