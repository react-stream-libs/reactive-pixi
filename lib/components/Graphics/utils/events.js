"use strict";

function hasInteractivity(eventsHandler) {
    return !!(eventsHandler.click || eventsHandler.mousedown || eventsHandler.mouseout || eventsHandler.mouseover || eventsHandler.mouseup || eventsHandler.mouseupoutside || eventsHandler.rightclick || eventsHandler.rightdown || eventsHandler.rightup || eventsHandler.rightupoutside || eventsHandler.tap || eventsHandler.touchend || eventsHandler.touchendoutside || eventsHandler.touchmove || eventsHandler.touchstart);
}
exports.hasInteractivity = hasInteractivity;
function applyInteractivity(gl, eventsHandler) {
    gl.on('click', eventsHandler.click);
    gl.on('mousedown', eventsHandler.mousedown);
    gl.on('mouseout', eventsHandler.mouseout);
    gl.on('mouseover', eventsHandler.mouseover);
    gl.on('mouseup', eventsHandler.mouseup);
    gl.on('mouseupoutside', eventsHandler.mouseupoutside);
    gl.on('rightclick', eventsHandler.rightclick);
    gl.on('rightdown', eventsHandler.rightdown);
    gl.on('rightup', eventsHandler.rightup);
    gl.on('rightupoutside', eventsHandler.rightupoutside);
    gl.on('tap', eventsHandler.tap);
    gl.on('touchend', eventsHandler.touchend);
    gl.on('touchendoutside', eventsHandler.touchendoutside);
    gl.on('touchmove', eventsHandler.touchmove);
    gl.on('touchstart', eventsHandler.touchstart);
}
exports.applyInteractivity = applyInteractivity;
function unapplyInteractivity(gl, eventsHandler) {
    if (!eventsHandler) {
        return;
    }
    gl.off('click', eventsHandler.click);
    gl.off('mousedown', eventsHandler.mousedown);
    gl.off('mouseout', eventsHandler.mouseout);
    gl.off('mouseover', eventsHandler.mouseover);
    gl.off('mouseup', eventsHandler.mouseup);
    gl.off('mouseupoutside', eventsHandler.mouseupoutside);
    gl.off('rightclick', eventsHandler.rightclick);
    gl.off('rightdown', eventsHandler.rightdown);
    gl.off('rightup', eventsHandler.rightup);
    gl.off('rightupoutside', eventsHandler.rightupoutside);
    gl.off('tap', eventsHandler.tap);
    gl.off('touchend', eventsHandler.touchend);
    gl.off('touchendoutside', eventsHandler.touchendoutside);
    gl.off('touchmove', eventsHandler.touchmove);
    gl.off('touchstart', eventsHandler.touchstart);
}
exports.unapplyInteractivity = unapplyInteractivity;