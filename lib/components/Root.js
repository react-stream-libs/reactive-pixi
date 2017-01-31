"use strict";

const pixi_js_1 = require("pixi.js");
const BaseBlueprint_1 = require("../types/BaseBlueprint");
const createComponent_1 = require("./createComponent");
class _NoneExistentBlueprint extends BaseBlueprint_1.BaseBlueprint {
    init(parent) {}
    updateBeforeChildren(props) {}
    updateAfterChildren(props) {}
    delete() {}
}
exports._NoneExistentBlueprint = _NoneExistentBlueprint;
class _Root extends BaseBlueprint_1.BaseBlueprint {
    constructor(renderer) {
        super();
        this.renderer = renderer;
        this.container = new pixi_js_1.Container();
    }
    init(parent) {}
    updateBeforeChildren(props) {}
    updateAfterChildren(props) {
        this.renderer.render(this.container);
    }
    delete() {}
}
exports._Root = _Root;
exports.Root = createComponent_1.createComponent(_Root);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.Root;
// export type _CirclePropsType = {
// } & BasePropsType;
// export type _CircleParentTypes = _Root;
// export class _Circle extends BaseBlueprint<_RootPropsType>
//     implements IParentableBy<_Root> {
//   _circle: boolean;
//   init(parent: _Root) {
//   }
//   updateBeforeChildren(props: _CirclePropsType) {
//   }
//   updateAfterChildren(props: _CirclePropsType) {
//   }
//   delete() {
//   }
// }
// export const Circle = createComponent<_Circle, _CircleParentTypes, _CirclePropsType>(_Circle);
// Root({
//   key: '123',
// }, [
//   Circle({
//     key: '1234',
//   }, [])
// ]);
// Circle({
//   key: '123',
// }, [
//   Root({
//     key: '123'
//   }, [])
// ])