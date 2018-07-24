// From my SoloLearn codes: https://code.sololearn.com/WgE8SYTs0O2C
// For older devices
if (_ecma6_) {
	function Csv() {
	    this.state = function () {
	        if (this.list) {
	            return true;
	        } else {
	            return false;
	        }
	    }
	    this.selected = [-1, -1];
	    this.expand = [0, 0];
	    this.record = true;
	    this.macro = "";
	    this.parse = function (text) {
	        if (text == null || text == undefined) {
	            console.error("Empty text to parse.");
	            if (this.recordHistory) {
	                let time = new Date();
	                this.actionHistory += "[" + time.toJSON() + "] Parsed text into CSV but failed: No text to parse.\n";
	            }
	        } else if (this.state() == true) {
	            console.error("Already had a CSV file! Remove it to parse!");
	        }
	        else {
	            console.log(text);
	            let obj = text.split("\n");
	            console.log("Csv lined.");
	            let obj2 = [];
	            let donum = 0
	            while (donum < obj.length) {
	                obj2[obj2.length] = obj[donum].split(",");
	                if (obj2[donum][obj2[donum].length-1] == "") {
	                    obj2[donum].pop();
	                }
	                donum ++;
	            }
	            console.log(obj.toString());
	            console.log("Csv styled.");
	            this.list = obj2;
	            this.selected = [0,0];
	        }
	    }
	    this.export = function () {
	        if (this.state() == true) {
		        let obj = this.list;
		        let obj2 = "";
		        let donum = 0;
		        let don = 0;
		        while (donum < obj.length) {
		            don = 0;
		            while (don < obj[donum].length) {
		                if (obj[donum][don].__proto__.constructor == String) {
		                    obj2 += obj[donum][don];
		                    if (don < obj[donum].length - 1) {
		                        obj2 += ",";
		                    } else if (donum == obj.length - 1) {
		                        console.log("CSV successfully exported in string.");
		                    } else {
		                        obj2 += "\n";
		                    }
	    	            } else {
	    	                console.error("CSV cannot be exported because some values are illegal.");
	    	            }
	    	            don ++;
	    	        }
	    	        donum ++;
	    	    }
	    	    return obj2;
	        }
	        else {
	            console.error("No initialized CSV present!");
	        }
	    }
	    this.clear = function () {
	        this.list = null;
	    }
	    this.create = function () {
	        this.list = [[]];
	        this.selected = [0, 0];
	    }
	    this.focus = function (arg1, arg2) {
	        let from = this.selected;
	        if (arg1) {
	            this.selected[0] = arg1;
	        }
	        if (arg2) {
	            this.selected[1] = arg2;
	        }
	        return this.list[this.selected[0]][this.selected[1]];
	    }
	    this.unit = function (arg1, arg2) {
	        let from = this.selected;
	        if (arg1) {
	            this.selected[0] += arg1;
	        }
	        if (arg2) {
	            this.selected[1] += arg2;
	        }
	        return this.list[this.selected[0]][this.selected[1]];
	    }
	    this.set = function (arg1, arg2, arg3) {
	        if (arg1 && arg2 && arg3) {
	            this.selected = [arg1, arg2];
	            if (arg3.__proto__.constructor == String) {
	                this.list[this.selected[0]][this.selected[1]] = arg3;
	            } else {
	                this.list[this.selected[0]][this.selected[1]] = arg3.toString();
	            }
	        } else if (arg1 && !(arg2 || arg3)) {
	            if (arg1.__proto__.constructor == String) {
	                this.list[this.selected[0]][this.selected[1]] = arg1;
	            } else {
	                this.list[this.selected[0]][this.selected[1]] = arg1.toString();
	            }
	        }
	        else {
	            console.error("Unknown usage.");
	        }
	    }
	}
	console.log("Module elsl.stat.csv loaded in ECMA6 mode.");
} else {
	function Csv() {
	    this.state = function () {
	        if (this.list) {
	            return true;
	        } else {
	            return false;
	        }
	    }
	    this.selected = [-1, -1];
	    this.expand = [0, 0];
	    this.record = true;
	    this.macro = "";
	    this.parse = function (text) {
	        if (text == null || text == undefined) {
	            console.error("Empty text to parse.");
	        } else if (this.state() == true) {
	            console.error("Already had a CSV file! Remove it to parse!");
	        }
	        else {
	            console.log(text);
	            obj = text.split("\n");
	            console.log("Csv lined.");
	            obj2 = [];
	            donum = 0
	            while (donum < obj.length) {
	                obj2[obj2.length] = obj[donum].split(",");
	                if (obj2[donum][obj2[donum].length-1] == "") {
	                    obj2[donum].pop();
	                }
	                donum ++;
	            }
	            console.log(obj.toString());
	            console.log("Csv styled.");
	            this.list = obj2;
	            this.selected = [0,0];
				obj = null;
	            obj2 = null;
	            donum = null;
	        }
	    }
	    this.export = function () {
	        if (this.state() == true) {
	        obj = this.list;
	        obj2 = "";
	        donum = 0;
	        don = 0;
	        while (donum < obj.length) {
	            don = 0;
	            while (don < obj[donum].length) {
	                if (obj[donum][don].__proto__.constructor == String) {
	                    obj2 += obj[donum][don];
	                    if (don < obj[donum].length - 1) {
	                        obj2 += ",";
	                    } else if (donum == obj.length - 1) {
	                        console.log("CSV successfully exported in string.");
	                    } else {
	                        obj2 += "\n";
	                    }
	                } else {
	                    console.error("CSV cannot be exported because some values are illegal.");
	                }
	                don ++
	            }
	            donum ++;
	        }
	        return obj2;
			obj = null;
			obj2 = null;
			donum = null;
			don = null;
	        }
	        else {
	            console.error("No initialized CSV present!");
	        }
	    }
	    this.clear = function () {
	        this.list = null;
	    }
	    this.create = function () {
	        this.list = [[]];
	        this.selected = [0, 0];
	    }
	    this.focus = function (arg1, arg2) {
	        from = this.selected;
	        if (arg1) {
	            this.selected[0] = arg1;
	        }
	        if (arg2) {
	            this.selected[1] = arg2;
	        }
	        return this.list[this.selected[0]][this.selected[1]];
			from = null;
	    }
	    this.unit = function (arg1, arg2) {
	        from = this.selected;
	        if (arg1) {
	            this.selected[0] += arg1;
	        }
	        if (arg2) {
	            this.selected[1] += arg2;
		}
	        return this.list[this.selected[0]][this.selected[1]];
		from = null;
	    }
	    this.set = function (arg1, arg2, arg3) {
	        if (arg1 && arg2 && arg3) {
	            this.selected = [arg1, arg2];
	            if (arg3.__proto__.constructor == String) {
	                this.list[this.selected[0]][this.selected[1]] = arg3;
	            } else {
	                this.list[this.selected[0]][this.selected[1]] = arg3.toString();
	            }
	        } else if (arg1 && !(arg2 || arg3)) {
	            if (arg1.__proto__.constructor == String) {
	                this.list[this.selected[0]][this.selected[1]] = arg1;
	            } else {
	                this.list[this.selected[0]][this.selected[1]] = arg1.toString();
	            }
	        }
	        else {
	            console.error("Unknown usage.");
	        }
	    }
	}
	console.log("Module elsl.stat.csv imported in compatible mode.")
}
