"use strict";
const React = require("react");
const react_bootstrap_1 = require("react-bootstrap");
class Header extends React.Component {
    handleSelect(eventKey) {
        console.error(eventKey);
    }
    render() {
        return (React.createElement(react_bootstrap_1.Navbar, null,
            React.createElement(react_bootstrap_1.Nav, { bsStyle: "tabs", activeKey: "1", onSelect: this.handleSelect },
                React.createElement(react_bootstrap_1.NavItem, { eventKey: "1", href: "/home" }, "NavItem 1 content"),
                React.createElement(react_bootstrap_1.NavItem, { eventKey: "2", title: "Item" }, "NavItem 2 content"),
                React.createElement(react_bootstrap_1.NavItem, { eventKey: "3", disabled: true }, "NavItem 3 content"),
                React.createElement(react_bootstrap_1.NavDropdown, { eventKey: "4", title: "Dropdown", id: "nav-dropdown" },
                    React.createElement(react_bootstrap_1.MenuItem, { eventKey: "4.1" }, "Action"),
                    React.createElement(react_bootstrap_1.MenuItem, { eventKey: "4.2" }, "Another action"),
                    React.createElement(react_bootstrap_1.MenuItem, { eventKey: "4.3" }, "Something else here"),
                    React.createElement(react_bootstrap_1.MenuItem, { divider: true }),
                    React.createElement(react_bootstrap_1.MenuItem, { eventKey: "4.4" }, "Separated link")))));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Header;
