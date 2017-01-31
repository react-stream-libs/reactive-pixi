import { BaseBlueprint } from '../types/BaseBlueprint';
import { IParentableBy } from '../types/IParentableBy';
import { BasePropsType } from '../types/BasePropsType';
import { RenderableType } from '../types/Renderable';
export declare function createComponent<BlueprintClass extends BaseBlueprint<PropsType> & IParentableBy<ParentableTypes>, ParentableTypes extends BaseBlueprint<BasePropsType>, PropsType extends BasePropsType>(blueprintClass: {
    new (): BlueprintClass & IParentableBy<ParentableTypes>;
}): (props: PropsType, children: RenderableType<BasePropsType, BaseBlueprint<BasePropsType> & IParentableBy<BlueprintClass>, BlueprintClass>[]) => RenderableType<PropsType, BlueprintClass, ParentableTypes>;
