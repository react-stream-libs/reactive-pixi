import {
  Graphics,
  interaction,
} from 'pixi.js';

export type EventsHandlerType = {
  click?: (event: interaction.InteractionEvent) => void;
  mousedown?: (event: interaction.InteractionEvent) => void;
  mouseout?: (event: interaction.InteractionEvent) => void;
  mouseover?: (event: interaction.InteractionEvent) => void;
  mouseup?: (event: interaction.InteractionEvent) => void;
  mouseclick?: (event: interaction.InteractionEvent) => void;
  mouseupoutside?: (event: interaction.InteractionEvent) => void;

  rightclick?: (event: interaction.InteractionEvent) => void;
  rightdown?: (event: interaction.InteractionEvent) => void;
  rightup?: (event: interaction.InteractionEvent) => void;
  rightupoutside?: (event: interaction.InteractionEvent) => void;

  tap?: (event: interaction.InteractionEvent) => void;
  touchend?: (event: interaction.InteractionEvent) => void;
  touchendoutside?: (event: interaction.InteractionEvent) => void;
  touchmove?: (event: interaction.InteractionEvent) => void;
  touchstart?: (event: interaction.InteractionEvent) => void;
}


export function hasInteractivity(eventsHandler: EventsHandlerType): boolean {
  return !(!(eventsHandler.click
    || eventsHandler.mousedown
    || eventsHandler.mouseout
    || eventsHandler.mouseover
    || eventsHandler.mouseup
    || eventsHandler.mouseclick
    || eventsHandler.mouseupoutside

    || eventsHandler.rightclick
    || eventsHandler.rightdown
    || eventsHandler.rightup
    || eventsHandler.rightupoutside

    || eventsHandler.tap
    || eventsHandler.touchend
    || eventsHandler.touchendoutside
    || eventsHandler.touchmove
    || eventsHandler.touchstart
  ));
}

export function applyInteractivity(gl: Graphics, eventsHandler: EventsHandlerType) {
  gl.on('click', eventsHandler.click);
  gl.on('mousedown', eventsHandler.mousedown);
  gl.on('mouseout', eventsHandler.mouseout);
  gl.on('mouseover', eventsHandler.mouseover);
  gl.on('mouseup', eventsHandler.mouseup);
  gl.on('mouseclick', eventsHandler.mouseclick);
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

export function unapplyInteractivity(gl: Graphics, eventsHandler: EventsHandlerType) {
  gl.off('click', eventsHandler.click);
  gl.off('mousedown', eventsHandler.mousedown);
  gl.off('mouseout', eventsHandler.mouseout);
  gl.off('mouseover', eventsHandler.mouseover);
  gl.off('mouseup', eventsHandler.mouseup);
  gl.off('mouseclick', eventsHandler.mouseclick);
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