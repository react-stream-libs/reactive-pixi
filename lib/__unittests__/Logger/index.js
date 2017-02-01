"use strict";

const _ = require("lodash");
class Logger {
    constructor(logs) {
        this.logs = logs || [];
    }
    add(logItem) {
        this.logs.push(logItem);
    }
    partialMatch(partialLogItems) {
        _.forEach(partialLogItems, (value, key) => this.logs[key].partialMatch(value));
        // return _.reduce(partialLogItems,
        //   (result, value, key) => result && this.logs[key].partialMatch(value),
        //   true
        // )
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Logger;
class LogItem {
    constructor(args) {
        this.data = args;
    }
    partialMatch(toMatch) {
        _.forEach(toMatch.data, (value, key) => {
            if (!_.isEqual(this.data[key], value)) {
                // FIXME: use stripMargins
                throw new Error(`
            LogItem Mismatch!
              value: ${value}
              key: ${key}
              this.data[key]: ${this.data[key]}
          `);
            }
        });
    }
}
exports.LogItem = LogItem;