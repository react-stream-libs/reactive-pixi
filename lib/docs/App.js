"use strict";

const React = require("react");
const react_router_1 = require("react-router");
const Routes_1 = require("./Routes");
const App = ({ history }) => {
    return React.createElement(react_router_1.Router, { history: history }, Routes_1.default);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;