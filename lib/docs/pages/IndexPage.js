"use strict";

const React = require("react");
const ReactWrapper_1 = require("../pageBlocks/ReactWrapper");
const Stage_1 = require("../../components/Stage");
const Graphics_1 = require("../../components/Graphics/Graphics");
const Rectangle_1 = require("../../components/Graphics/Rectangle");
class IndexPage extends React.Component {
    constructor(props) {
        super(props);
        this.rotation = 0;
    }
    rotateBy(angle) {
        this.rotation = this.rotation + angle;
        this.updateGraphics();
    }
    updateGraphics() {
        const renderable = Stage_1.Stage({
            key: 'mainStage'
        }, [Graphics_1.Graphics({
            key: 'graphics',
            // rotation: Math.PI * (this.rotation / 360),
            x: 0, y: 0,
            click: () => {
                this.rotateBy(30);console.error('clicked!');
            }
        }, [Rectangle_1.Rectangle({
            key: 'rect',
            x: 0, y: this.rotation,
            height: 50, width: 100,
            color: 0x00ffff
        }, []), Rectangle_1.Rectangle({
            key: 'rect_still',
            x: 50, y: 20,
            height: 200, width: 200,
            color: 0xFFFF00,
            alpha: 0.2
        }, [])])]);
        this.refs.reactWrapper.update(renderable);
    }
    componentDidMount() {
        this.updateGraphics();
    }
    render() {
        return React.createElement("div", null, React.createElement(ReactWrapper_1.default, { ref: "reactWrapper" }), this.props.children, React.createElement("button", { onClick: () => this.rotateBy(15) }, "rotate!"));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = IndexPage;