"use strict";
const _ = require("lodash");
const pixi_js_1 = require("pixi.js");
const BaseBlueprint_1 = require("../types/BaseBlueprint");
const createComponent_1 = require("./createComponent");
const Root_1 = require("./Root");
class _Stage extends BaseBlueprint_1.BaseBlueprint {
    init(parent) {
        window['stage'] = this;
        this.container = new pixi_js_1.Container();
        this.parent = parent;
        if (this.parent instanceof _Stage) {
            this.parent.container.addChild(this.container);
        }
        if (this.parent instanceof Root_1._Root) {
            this.parent.container.addChild(this.container);
        }
    }
    updateBeforeChildren(props) {
    }
    updateAfterChildren(props) {
        if (!_.isEqual(this.prevProps, props)) {
            this.container.x = props.x || 0;
            this.container.y = props.y || 0;
            this.container.pivot = props.pivot || new pixi_js_1.Point(0, 0);
            this.container.rotation = props.rotation || 0;
            this.container.alpha = props.alpha || 1;
            console.error('updating Stage');
        }
        // FIXME: fix renderer part & move this to renderer.
        if (this.parent instanceof Root_1._Root) {
            this.parent.renderer.render(this.parent.container);
        }
    }
    delete() {
        if (this.parent instanceof _Stage || this.parent instanceof Root_1._Root) {
            this.parent.container.removeChild(this.container);
            delete this.container;
            return;
        }
        // FIXME: throw error here.
    }
}
exports._Stage = _Stage;
exports.Stage = createComponent_1.createComponent(_Stage);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.Stage;
