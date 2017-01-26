import { BaseBlueprint } from '../types/BaseBlueprint';
import { BaseChildable } from '../types/BaseChildable';
import { BasePropsType } from '../types/BasePropsType';
import { RenderableType } from '../types/Renderable';

export function createComponent<
  BlueprintClass extends BaseBlueprint,
  // ParentableTypes extends BaseBlueprint,
  ParentableTypes extends BaseChildable,
  PropsType extends BasePropsType
>(
  blueprintClass: { new(): BlueprintClass }
) {
  return function _componentMetaData(
    props: PropsType,
    children: Array<RenderableType<BasePropsType, BaseBlueprint, BlueprintClass>>
  ): RenderableType<PropsType, BlueprintClass, ParentableTypes> {
    return {
      blueprint: blueprintClass,
      props,
    };
  }
}