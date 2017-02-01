"use strict";
const React = require("react");
class NotFoundPage extends React.Component {
    render() {
        return (React.createElement("div", null,
            React.createElement("p", null, " not found page "),
            this.props.children));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = NotFoundPage;
