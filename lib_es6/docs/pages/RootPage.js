"use strict";
const React = require("react");
class RootPage extends React.Component {
    render() {
        return (React.createElement("div", null,
            React.createElement("p", null, " root page "),
            this.props.children));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RootPage;
