"use strict";

const pixi_js_1 = require("pixi.js");
class GraphicsWithLineAlpha extends pixi_js_1.Graphics {}
exports.GraphicsWithLineAlpha = GraphicsWithLineAlpha;
;
function getLineStyle(g) {
    const graphicsWithLineAlpha = g;
    return {
        color: graphicsWithLineAlpha.lineColor,
        width: graphicsWithLineAlpha.lineWidth,
        alpha: graphicsWithLineAlpha.lineAlpha
    };
}
exports.getLineStyle = getLineStyle;
function setLineStyle(g, lineStyle) {
    const _lineStyle = lineStyle || {};
    g.lineStyle(_lineStyle.width || 0, _lineStyle.color || 0, _lineStyle.alpha || 1);
}
exports.setLineStyle = setLineStyle;