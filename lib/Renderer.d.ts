/// <reference types="pixi.js" />
import { SystemRenderer } from 'pixi.js';
import { RenderableType } from './types/Renderable';
import { BaseBlueprint } from './types/BaseBlueprint';
import { BasePropsType } from './types/BasePropsType';
import { InstanceTreeType } from './types/InstanceTree';
import { IParentableBy } from './types/IParentableBy';
import { _Root } from './components/Root';
export declare type RootRenderableType = RenderableType<BasePropsType, BaseBlueprint<BasePropsType> & IParentableBy<_Root>, _Root>;
export declare class ReactivePixiRenderer {
    renderer: SystemRenderer;
    instanceTree: InstanceTreeType;
    constructor(args: {
        renderer: SystemRenderer;
    });
    render(toRender?: RootRenderableType): void;
}
export declare function render(instanceTree: InstanceTreeType, toRender: RenderableType<BasePropsType, BaseBlueprint<BasePropsType>, BaseBlueprint<BasePropsType>>): void;
export declare function deleteChild(instanceTree: InstanceTreeType, childKey: string): void;
export default ReactivePixiRenderer;
