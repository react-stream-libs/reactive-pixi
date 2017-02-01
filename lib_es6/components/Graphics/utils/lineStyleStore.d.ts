/// <reference types="pixi.js" />
import { Graphics } from 'pixi.js';
export declare class GraphicsWithLineAlpha extends Graphics {
    lineAlpha: number;
}
export declare type LineStyleType = {
    color?: number;
    width?: number;
    alpha?: number;
};
export declare function getLineStyle(g: Graphics): {
    color: number;
    width: number;
    alpha: number;
};
export declare function setLineStyle(g: Graphics, lineStyle?: LineStyleType): void;
