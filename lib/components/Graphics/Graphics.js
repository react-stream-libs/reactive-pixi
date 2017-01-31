"use strict";

const _ = require("lodash");
const pixi_js_1 = require("pixi.js");
const BaseBlueprint_1 = require("../../types/BaseBlueprint");
const createComponent_1 = require("../createComponent");
const Root_1 = require("../Root");
class _Graphics extends BaseBlueprint_1.BaseBlueprint {
    init(parent) {
        this.container = new pixi_js_1.Graphics();
        this.parent = parent;
        this.parent.container.addChild(this.container);
    }
    updateBeforeChildren(props) {
        this.container.clear();
    }
    updateAfterChildren(props) {
        if (!_.isEqual(this.prevProps, props)) {
            this.container.x = props.x || 0;
            this.container.y = props.y || 0;
            this.container.rotation = props.rotation || 0;
            this.container.alpha = props.alpha || 1;
        }
    }
    delete() {
        if (this.parent instanceof _Graphics || this.parent instanceof Root_1._Root) {
            this.parent.container.removeChild(this.container);
            delete this.container;
            return;
        }
        // FIXME: throw error here.
    }
}
exports._Graphics = _Graphics;
exports.Graphics = createComponent_1.createComponent(_Graphics);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.Graphics;