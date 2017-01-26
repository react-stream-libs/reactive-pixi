import { BaseBlueprint } from './BaseBlueprint';
import { BasePropsType } from './BasePropsType';
// export class RenderableType<
//   Blueprint extends BaseBlueprint,
//   ParentableBy extends BaseBlueprint
// > {
//   constructor(instance: Blueprint) {

//   }
//   checkParentableBy(parent: ParentableBy) {

//   }
// }

export type RenderableType<
  PropsType extends BasePropsType,
  Blueprint extends BaseBlueprint,
  ParentableBy extends BaseBlueprint
> = {
  blueprint: { new(): Blueprint },
  props: PropsType,
  _parentables?: ParentableBy,
}