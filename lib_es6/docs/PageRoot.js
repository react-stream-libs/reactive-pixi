"use strict";
const React = require("react");
const header_1 = require("./pageBlocks/header");
class PageRoot extends React.Component {
    render() {
        return (React.createElement("div", null,
            React.createElement(header_1.default, null),
            this.props.children));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PageRoot;
