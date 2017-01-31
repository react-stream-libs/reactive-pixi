"use strict";
function createComponent(blueprintClass) {
    return function _componentMetaData(props, children) {
        return {
            blueprint: blueprintClass,
            props,
            children,
        };
    };
}
exports.createComponent = createComponent;
