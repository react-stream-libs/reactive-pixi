"use strict";
const BaseBlueprint_1 = require("../../types/BaseBlueprint");
const createComponent_1 = require("../createComponent");
const Graphics_1 = require("./Graphics");
const lineStyleStore_1 = require("./utils/lineStyleStore");
class _Rectangle extends BaseBlueprint_1.BaseBlueprint {
    init(parent) {
        this.parent = parent;
        if (this.parent instanceof Graphics_1._Graphics) {
            return;
        }
        // FIXME: throw error here.
    }
    updateBeforeChildren(props) {
        const oldLineStyle = lineStyleStore_1.getLineStyle(this.parent.container);
        this.parent.container.beginFill(props.color, props.alpha || 1);
        this.parent.container.drawRect(props.x, props.y, props.width, props.height);
        this.parent.container.endFill();
        lineStyleStore_1.setLineStyle(this.parent.container, oldLineStyle);
    }
    updateAfterChildren(props) {
    }
    delete() {
        if (this.parent instanceof Graphics_1._Graphics) {
            return;
        }
        // FIXME: throw error here.
    }
}
exports._Rectangle = _Rectangle;
exports.Rectangle = createComponent_1.createComponent(_Rectangle);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.Rectangle;
