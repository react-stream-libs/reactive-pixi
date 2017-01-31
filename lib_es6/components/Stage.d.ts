/// <reference types="pixi.js" />
import { Container } from 'pixi.js';
import { BaseBlueprint } from '../types/BaseBlueprint';
import { BasePropsType } from '../types/BasePropsType';
import { IParentableBy } from '../types/IParentableBy';
import { RenderableType } from '../types/Renderable';
import { DisplayObjectPropsType } from '../types/DisplayObjectPropsType';
import { _Root } from './Root';
export declare type _StageParentTypes = _Stage & _Root;
export declare type StagePropsType = {} & BasePropsType & DisplayObjectPropsType;
export declare class _Stage extends BaseBlueprint<StagePropsType> implements IParentableBy<_StageParentTypes> {
    container: Container;
    parent: _StageParentTypes;
    prevProps: StagePropsType;
    init(parent: _StageParentTypes): void;
    updateBeforeChildren(props: StagePropsType): void;
    updateAfterChildren(props: StagePropsType): void;
    delete(): void;
}
export declare const Stage: (props: StagePropsType, children: RenderableType<BasePropsType, BaseBlueprint<BasePropsType> & IParentableBy<_Stage>, _Stage>[]) => RenderableType<StagePropsType, _Stage, _StageParentTypes>;
export default Stage;
export { RenderableType };
