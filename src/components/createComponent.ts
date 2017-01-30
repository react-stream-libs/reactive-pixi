import { BaseBlueprint } from '../types/BaseBlueprint';
import { IParentableBy } from '../types/IParentableBy';
import { BasePropsType } from '../types/BasePropsType';
import { RenderableType } from '../types/Renderable';

export function createComponent<
  BlueprintClass extends BaseBlueprint<PropsType>,
  ParentableTypes extends BaseBlueprint<BasePropsType>,
  PropsType extends BasePropsType
>(
  blueprintClass: {
    new(): BlueprintClass & IParentableBy<BaseBlueprint<BasePropsType>>
  },
) {
  return function _componentMetaData(
    props: PropsType,
    children: Array<
      RenderableType<
        BasePropsType,
        BaseBlueprint<BasePropsType> & IParentableBy<BlueprintClass>,
        BlueprintClass
      >
    >
  ): RenderableType<PropsType, BlueprintClass, ParentableTypes> {
    return {
      blueprint: blueprintClass,
      props,
      children,
    };
  }
}