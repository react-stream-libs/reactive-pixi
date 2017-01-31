"use strict";

const React = require("react");
const react_router_1 = require("react-router");
const PageRoot_1 = require("./PageRoot");
const IndexPage_1 = require("./pages/IndexPage");
const StageDemoPage_1 = require("./pages/StageDemoPage");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = React.createElement(react_router_1.Route, { path: "/", component: PageRoot_1.default }, React.createElement(react_router_1.IndexRoute, { component: IndexPage_1.default }), React.createElement(react_router_1.Route, { path: "/stage-demo", component: StageDemoPage_1.default }));