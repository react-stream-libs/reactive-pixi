"use strict";

require("console-polyfill");
const React = require("react");
const ReactDOM = require("react-dom");
const react_router_1 = require("react-router");
require("bootstrap/dist/css/bootstrap.css");
const App_1 = require("./App");
const history = react_router_1.hashHistory;
ReactDOM.render(React.createElement(App_1.default, { history: history }), document.getElementById('app'));