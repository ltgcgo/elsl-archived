function Queue() {
    this["[[delay]]"] = 800;
    this.interval = function(v) {
        if (v.constructor == Number) {
            if (v > 0) {
                this["[[delay]]"] = v;
            } else {
                throw (new RangeError("[elsl.ext.queue] Detection interval should be greater than 0."));
            }
        } else {
            throw (new TypeError("[elsl.ext.queue] Inteval must be a number!"));
        }
    }
    this.time = function(time) {
        if (time.constructor == Date) {
            let month = time.getMonth();
            let year = time.getFullYear();
            let timestamp = time.getMilliseconds() / 1000 + time.getSeconds() + time.getMinutes() * 60 + time.getHours() * 3600 + time.getDate() * 86400 + time.getMonth() * 2592000;
            if (month > 2) {
                if (year % 4 == 0) {
                    if (year % 400 == 0) {
                        timestamp += 86400;
                    } else if (year % 100 != 0) {
                        timestamp += 86400;
                    }
                }
                if (month >= 11) {
                    timestamp += 345600;
                } else if (month >= 9) {
                    timestamp += 259200;
                } else if (month == 8) {
                    timestamp += 172800;
                } else if (month >= 6) {
                    timestamp += 86400;
                } else if (month == 3) {
                    timestamp -= 86400;
                }
            } else if (month == 2) {
                timestamp += 86400;
            }
            return timestamp;
        }
    }
    this["[[list]]"] = [];
    this.count = 0;
    this.finished = 0;
    this.history = [];
    this.idle = false;
    this.getRemain = function() {
        return this["[[list]]"].length;
    }
    this.add = function(task) {
        if (task.constructor == Function) {
            this["[[list]]"].splice(this["[[list]]"].length, 0, task);
            this.count++;
        } else {
            throw (new TypeError("[elsl.ext.queue] Invalid task type."));
        }
    }
    this.run = function() {
        this.error = false;
        if (this["[[list]]"].length != 0) {
            if (this.idle) {
                console.warn("[elsl.ext.queue] New task detected. Queue is executing new tasks...");
            }
            this.idle = false;
            let startTime = new Date();
            while (this["[[list]]"][0].loaded == true && window.loaded == false) {
                this["[[list]]"][this["[[list]]"].length] = this["[[list]]"][0];
                this["[[list]]"].splice(0, 1);
            }
            while (this["[[list]]"].length != 0) {
                _task = new Promise(this["[[list]]"][0]);
                this.history[this.history.length] = this["[[list]]"][0];
                this["[[list]]"].splice(0, 1);
            }
            let endTime = new Date();
            this.duration = Math.round((this.time(endTime) - this.time(startTime)) * 1000) / 1000;
        } else {
            if (!(this.idle)) {
                console.log("[elsl.ext.queue] Task creation is all finished. Queue is now standby.");
                console.log("[elsl.ext.queue] Creation consumed %fs.", this.duration || 0);
            }
            this.idle = true;
        }
        this.thread = setTimeout(function() {
            Queue.run();
        }, this["[[delay]]"]);
    }
}
Queue = new Queue();
Queue.run();
