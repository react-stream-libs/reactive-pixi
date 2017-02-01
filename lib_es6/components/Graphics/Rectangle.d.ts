import { BaseBlueprint } from '../../types/BaseBlueprint';
import { BasePropsType } from '../../types/BasePropsType';
import { IParentableBy } from '../../types/IParentableBy';
import { RenderableType } from '../../types/Renderable';
import { _Paper } from './Paper';
import { LineStyleType } from './utils/lineStyleStore';
export declare type _RectangleParentTypes = _Paper;
export declare type RectanglePropsType = {
    x: number;
    y: number;
    width: number;
    height: number;
    color?: number;
    alpha?: number;
    lineStyle?: LineStyleType;
} & BasePropsType;
export declare class _Rectangle extends BaseBlueprint<RectanglePropsType> implements IParentableBy<_RectangleParentTypes> {
    parent: _RectangleParentTypes;
    prevProps: RectanglePropsType;
    init(parent: _RectangleParentTypes): void;
    updateBeforeChildren(props: RectanglePropsType): void;
    updateAfterChildren(props: RectanglePropsType): void;
    delete(): void;
}
export declare const Rectangle: (props: RectanglePropsType, children: RenderableType<BasePropsType, BaseBlueprint<BasePropsType> & IParentableBy<_Rectangle>, _Rectangle>[]) => RenderableType<RectanglePropsType, _Rectangle, _Paper>;
export default Rectangle;
export { RenderableType };
