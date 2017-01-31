import { DisplayObject } from 'pixi.js';

export type __Partial<T> = {
  [P in keyof T]?: T[P];
}

export type DisplayObjectPropsType = __Partial<DisplayObject>
