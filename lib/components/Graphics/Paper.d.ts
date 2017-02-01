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
export declare type _PaperParentTypes = _Paper & _Stage & _Root;
export declare type PaperPropsType = {} & BasePropsType & DisplayObjectPropsType & EventsHandlerType;
export declare class _Paper extends BaseBlueprint<PaperPropsType> implements IParentableBy<_PaperParentTypes> {
    container: PixiGraphics;
    parent: _PaperParentTypes;
    prevProps: PaperPropsType;
    init(parent: _PaperParentTypes): void;
    updateBeforeChildren(props: PaperPropsType): void;
    updateAfterChildren(props: PaperPropsType): void;
    delete(): void;
}
export declare const Paper: (props: PaperPropsType, children: RenderableType<BasePropsType, BaseBlueprint<BasePropsType> & IParentableBy<_Paper>, _Paper>[]) => RenderableType<PaperPropsType, _Paper, _PaperParentTypes>;
export default Paper;
export { RenderableType };
