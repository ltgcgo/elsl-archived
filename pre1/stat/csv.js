// Updated on 17:21 July 23rd, 2018, from my sololearn codes: https://code.sololearn.com/WgE8SYTs0O2C
function Csv() {
    this.state = function () {
        if (this.list) {
            return true;
        } else {
            return false;
        }
        if (this.recordHistory) {
            let time = new Date();
            this.actionHistory += "[" + time.toJSON() + "] Verified if CSV was created.\n";
        }
    }
    this.selected = [-1, -1];
    this.expand = [0, 0];
    this.recordHistory = true;
    this.actionHistory = "";
    this.parse = function (text) {
        if (text == null || text == undefined) {
            console.error("Empty text to parse.");
            if (this.recordHistory) {
                let time = new Date();
                this.actionHistory += "[" + time.toJSON() + "] Parsed text into CSV but failed: No text to parse.\n";
            }
        } else if (this.state() == true) {
            console.error("Already had a CSV file! Remove it to parse!");
            if (this.recordHistory) {
                let time = new Date();
                this.actionHistory += "[" + time.toJSON() + "] Parsed text into CSV but failed: Already loaded.\n";
            }
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
            if (this.recordHistory) {
                let time = new Date();
                this.actionHistory += "[" + time.toJSON() + "] Parsed text into CSV.\n";
            }
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
                don ++
            }
            donum ++;
        }
        return obj2;
        }
        else {
            console.error("No initialized CSV present!");
        }
        if (this.recordHistory) {
            let time = new Date();
            this.actionHistory += "[" + time.toJSON() + "] Exported CSV into string.\n";
        }
    }
    this.clear = function () {
        this.list = null;
        if (this.recordHistory) {
            let time = new Date();
            this.actionHistory += "[" + time.toJSON() + "] Deleted CSV.\n";
        }
    }
    this.create = function () {
        this.list = [[]];
        this.selected = [0, 0];
        if (this.recordHistory) {
            let time = new Date();
            this.actionHistory += "[" + time.toJSON() + "] Created CSV.\n";
        }
    }
    this.focus = function (arg1, arg2) {
        let from = this.selected;
        if (arg1) {
            this.selected[0] = arg1;
        }
        if (arg2) {
            this.selected[1] = arg2;
        }
        if (this.recordHistory) {
            let time = new Date();
            if (arg1 || arg2) {
                this.actionHistory += "[" + time.toJSON() + "] Moved focus absolutely from " + from + " to " + this.selected + ".\n";
            } else {
                this.actionHistory += "[" + time.toJSON() + "] Read content inside " + from + " via absolute movement.\n";
            }
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
        if (this.recordHistory) {
            let time = new Date();
            if (arg1 || arg2) {
                this.actionHistory += "[" + time.toJSON() + "] Moved focus relatively from " + from + " to " + this.selected + ".\n";
            } else {
                this.actionHistory += "[" + time.toJSON() + "] Read content inside " + from + " via relative movement.\n";
            }
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
console.log("Module ELSL Objects Loaded.")
