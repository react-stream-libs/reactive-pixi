/// <reference types="pixi.js" />
import { SystemRenderer, Container } from 'pixi.js';
import { BaseBlueprint } from '../types/BaseBlueprint';
import { BasePropsType } from '../types/BasePropsType';
import { IParentableBy } from '../types/IParentableBy';
export declare type _RootPropsType = {} & BasePropsType;
export declare class _NoneExistentBlueprint extends BaseBlueprint<BasePropsType> {
    init(parent: BaseBlueprint<BasePropsType>): void;
    updateBeforeChildren(props: BasePropsType): void;
    updateAfterChildren(props: BasePropsType): void;
    delete(): void;
}
export declare class _Root extends BaseBlueprint<BasePropsType> implements IParentableBy<_NoneExistentBlueprint> {
    container: Container;
    renderer: SystemRenderer;
    constructor(renderer?: SystemRenderer);
    init(parent: _NoneExistentBlueprint): void;
    updateBeforeChildren(props: BasePropsType): void;
    updateAfterChildren(props: BasePropsType): void;
    delete(): void;
}
export declare const Root: (props: _RootPropsType, children: RenderableType<BasePropsType, BaseBlueprint<BasePropsType> & IParentableBy<_Root>, _Root>[]) => RenderableType<_RootPropsType, _Root, _NoneExistentBlueprint>;
export default Root;
import { RenderableType } from '../types/Renderable';
export { RenderableType };
