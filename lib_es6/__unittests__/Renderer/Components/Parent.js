"use strict";
const BaseBlueprint_1 = require("../../../types/BaseBlueprint");
const createComponent_1 = require("../../../components/createComponent");
const Logger_1 = require("../../Logger");
;
class __Parent extends BaseBlueprint_1.BaseBlueprint {
    init(parent) { }
    updateBeforeChildren(props) { }
    updateAfterChildren(props) { }
    delete() { }
}
exports.__Parent = __Parent;
function getParentComps(logger) {
    class _Parent extends __Parent {
        constructor() {
            super();
            this.logger = logger;
        }
        init(parent) {
            this.logger.add(new Logger_1.LogItem({
                instance: this,
                blueprint: _Parent,
                type: 'init',
            }));
        }
        updateAfterChildren(props) {
            this.logger.add(new Logger_1.LogItem({
                instance: this,
                blueprint: _Parent,
                type: 'update',
                props,
            }));
        }
        delete() {
            this.logger.add(new Logger_1.LogItem({
                instance: this,
                blueprint: _Parent,
                type: 'delete',
            }));
        }
    }
    const Parent = createComponent_1.createComponent(_Parent);
    return {
        _Parent, Parent,
    };
}
exports.getParentComps = getParentComps;
