/// <reference types="pixi.js" />
import { Graphics, interaction } from 'pixi.js';
export declare type EventsHandlerType = {
    click?: (event: interaction.InteractionEvent) => void;
    mousedown?: (event: interaction.InteractionEvent) => void;
    mouseout?: (event: interaction.InteractionEvent) => void;
    mouseover?: (event: interaction.InteractionEvent) => void;
    mouseup?: (event: interaction.InteractionEvent) => void;
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
};
export declare function hasInteractivity(eventsHandler: EventsHandlerType): boolean;
export declare function applyInteractivity(gl: Graphics, eventsHandler: EventsHandlerType): void;
export declare function unapplyInteractivity(gl: Graphics, eventsHandler?: EventsHandlerType): void;
