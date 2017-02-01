"use strict";
const React = require("react");
const react_dom_1 = require("react-dom");
const pixi_js_1 = require("pixi.js");
const Renderer_1 = require("../../Renderer");
class ReactivePixiReactWrapper extends React.Component {
    componentDidMount() {
        const canvasDOM = react_dom_1.findDOMNode(this.refs.canvasRef);
        // FIXME: autoDetectRenderer doesn't seem to work.
        const pixiRenderer = pixi_js_1.autoDetectRenderer(500, 500, {
            view: canvasDOM,
        });
        this.renderer = new Renderer_1.default({
            renderer: pixiRenderer,
        });
    }
    update(renderable) {
        this.renderer.render(renderable);
    }
    render() {
        return (React.createElement("canvas", { ref: "canvasRef" }));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ReactivePixiReactWrapper;
