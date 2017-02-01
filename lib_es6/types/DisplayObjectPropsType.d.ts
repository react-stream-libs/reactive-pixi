/// <reference types="pixi.js" />
import { DisplayObject } from 'pixi.js';
export declare type __Partial<T> = {
    [P in keyof T]?: T[P];
};
export declare type DisplayObjectPropsType = __Partial<DisplayObject>;
