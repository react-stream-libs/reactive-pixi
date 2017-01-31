/// <reference types="pixi.js" />
import { Graphics as PixiGraphics } from 'pixi.js';
import { BaseBlueprint } from '../../types/BaseBlueprint';
import { BasePropsType } from '../../types/BasePropsType';
import { IParentableBy } from '../../types/IParentableBy';
import { RenderableType } from '../../types/Renderable';
import { DisplayObjectPropsType } from '../../types/DisplayObjectPropsType';
import { _Root } from '../Root';
import { _Stage } from '../Stage';
import { EventsHandlerType } from './utils/events';
export declare type _GraphicsParentTypes = _Graphics & _Stage & _Root;
export declare type GraphicsPropsType = {} & BasePropsType & DisplayObjectPropsType & EventsHandlerType;
export declare class _Graphics extends BaseBlueprint<GraphicsPropsType> implements IParentableBy<_GraphicsParentTypes> {
    container: PixiGraphics;
    parent: _GraphicsParentTypes;
    prevProps: GraphicsPropsType;
    init(parent: _GraphicsParentTypes): void;
    updateBeforeChildren(props: GraphicsPropsType): void;
    updateAfterChildren(props: GraphicsPropsType): void;
    delete(): void;
}
export declare const Graphics: (props: GraphicsPropsType, children: RenderableType<BasePropsType, BaseBlueprint<BasePropsType> & IParentableBy<_Graphics>, _Graphics>[]) => RenderableType<GraphicsPropsType, _Graphics, _GraphicsParentTypes>;
export default Graphics;
export { RenderableType };
