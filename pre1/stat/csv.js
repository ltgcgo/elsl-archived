// Updated on 17:21 July 23rd, 2018, from my sololearn codes: https://code.sololearn.com/WgE8SYTs0O2C
function _main() {
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
        if (_.is.null(text)) {
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
a = new Csv();
// Sample CSV Parsing
a.parse("592170,FL,PINELLAS COUNTY,0,24574.5,0,24574.5,24574.5,40907.7,0,0,0,0,28.122885,-82.770218,Residential,Wood,3\n827844,FL,PINELLAS COUNTY,0,38112.3,0,38112.3,38112.3,52710.45,0,0,0,0,28.122885,-82.770218,Residential,Wood,3\n876385,FL,PINELLAS COUNTY,0,18312.3,0,18312.3,18312.3,18575.81,0,0,0,0,28.122885,-82.770218,Residential,Wood,3\n167630,FL,PINELLAS COUNTY,0,4522.5,0,4522.5,4522.5,4048.11,0,0,0,0,28.122885,-82.770218,Residential,Wood,3\n241496,FL,PINELLAS COUNTY,0,1350,0,1350,1350,1430.16,0,0,0,0,28.122885,-82.770218,Residential,Wood,3\n780814,FL,PINELLAS COUNTY,0,9770.4,0,9770.4,9770.4,9349.98,0,0,0,0,28.122885,-82.770218,Residential,Wood,3\n404309,FL,PINELLAS COUNTY,0,88722,0,88722,88722,155065.65,0,0,0,0,28.122885,-82.770218,Residential,Wood,3\n465875,FL,PINELLAS COUNTY,1297057.5,1297057.5,1297057.5,1297057.5,1297057.5,1577500.79,0,0,0,0,28.0809,-82.7588,Residential,Masonry,1\n791209,FL,PINELLAS COUNTY,173286.9,173286.9,0,0,173286.9,205527.97,0,0,0,0,28.11055,-82.76636,Residential,Wood,4\n322627,FL,PINELLAS COUNTY,1499781.6,1499781.6,0,0,1499781.6,1768782.43,0,0,0,0,28.089415,-82.697411,Residential,Masonry,3\n398149,FL,PINELLAS COUNTY,373488.3,373488.3,0,0,373488.3,596003.67,0,0,0,0,28.06444,-82.77459,Residential,Masonry,1");
}
