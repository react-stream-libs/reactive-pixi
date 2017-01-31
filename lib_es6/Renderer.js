"use strict";
const Root_1 = require("./components/Root");
const _ = require("lodash");
class ReactivePixiRenderer {
    constructor(args) {
        this.renderer = args.renderer;
        this.instanceTree = {
            instance: new Root_1._Root(this.renderer),
            children: {},
        };
    }
    render(toRender) {
        const renderRoot = Root_1.default({
            key: '__ROOT__',
        }, _.compact([
            toRender,
        ]));
        render(this.instanceTree, renderRoot);
    }
}
exports.ReactivePixiRenderer = ReactivePixiRenderer;
// FIXME: implement a loop-variant for speed up!
function render(instanceTree, toRender) {
    const toRenderChildrenMap = _.reduce(toRender.children, (mappedChildren, child) => {
        mappedChildren[child.props.key] = child;
        return mappedChildren;
    }, {});
    _.forEach(instanceTree.children, (instanceTreeChild, key) => {
        if (!toRenderChildrenMap[key]
            || !(instanceTreeChild.instance instanceof toRenderChildrenMap[key].blueprint)) {
            deleteChild(instanceTree, key);
        }
    });
    _.forEach(toRender.children, (renderableChild, renderableChildKey) => {
        const key = renderableChild.props.key;
        if (!instanceTree.children[key]) {
            const childInstance = new renderableChild.blueprint();
            childInstance.init(instanceTree.instance);
            instanceTree.children[key] = {
                instance: childInstance,
                children: {}
            };
        }
        const childInstanceTree = instanceTree.children[key];
        childInstanceTree.instance.updateBeforeChildren(renderableChild.props);
        render(childInstanceTree, renderableChild);
        childInstanceTree.instance.updateAfterChildren(renderableChild.props);
    });
}
exports.render = render;
function deleteChild(instanceTree, childKey) {
    const childToDelete = instanceTree.children[childKey];
    _.forEach(childToDelete.children, (childOfChild, key) => deleteChild(childToDelete, key));
    childToDelete.instance.delete();
    delete instanceTree.children[childKey];
}
exports.deleteChild = deleteChild;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ReactivePixiRenderer;
