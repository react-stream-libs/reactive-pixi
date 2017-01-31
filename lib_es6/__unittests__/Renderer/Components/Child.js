"use strict";
const BaseBlueprint_1 = require("../../../types/BaseBlueprint");
const createComponent_1 = require("../../../components/createComponent");
const Logger_1 = require("../../Logger");
;
class __Child extends BaseBlueprint_1.BaseBlueprint {
    init(parent) {
        this.logger.add(new Logger_1.LogItem({
            instance: this,
            blueprint: __Child,
            type: 'init',
        }));
    }
    updateBeforeChildren(props) {
    }
    updateAfterChildren(props) {
    }
    delete() {
    }
}
exports.__Child = __Child;
function getChildComps(logger) {
    class _Child extends __Child {
        constructor() {
            super();
            this.logger = logger;
        }
    }
    const Child = createComponent_1.createComponent(_Child);
    return {
        _Child, Child,
    };
}
exports.getChildComps = getChildComps;
