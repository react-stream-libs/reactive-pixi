"use strict";
const React = require("react");
class StageDemoPage extends React.Component {
    render() {
        return (React.createElement("div", null,
            React.createElement("p", null, " home page "),
            React.createElement("p", null, " home page "),
            this.props.children));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = StageDemoPage;
