"use strict";
const _ = require("lodash");
const pixi_js_1 = require("pixi.js");
const BaseBlueprint_1 = require("../../types/BaseBlueprint");
const createComponent_1 = require("../createComponent");
const Root_1 = require("../Root");
const events_1 = require("./utils/events");
class _Paper extends BaseBlueprint_1.BaseBlueprint {
    init(parent) {
        this.container = new pixi_js_1.Graphics();
        this.parent = parent;
        this.parent.container.addChild(this.container);
    }
    updateBeforeChildren(props) {
        this.container.clear();
        events_1.unapplyInteractivity(this.container, this.prevProps);
        this.container.interactive = events_1.hasInteractivity(props);
        events_1.applyInteractivity(this.container, props);
    }
    updateAfterChildren(props) {
        if (!_.isEqual(this.prevProps, props)) {
            this.container.x = props.x || 0;
            this.container.y = props.y || 0;
            this.container.rotation = props.rotation || 0;
            this.container.alpha = props.alpha || 1;
        }
        this.prevProps = props;
    }
    delete() {
        if (this.parent instanceof _Paper || this.parent instanceof Root_1._Root) {
            this.parent.container.removeChild(this.container);
            delete this.container;
            return;
        }
        // FIXME: throw error here.
    }
}
exports._Paper = _Paper;
exports.Paper = createComponent_1.createComponent(_Paper);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.Paper;
