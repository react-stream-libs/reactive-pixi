import { BaseBlueprint } from './BaseBlueprint';
import { BasePropsType } from './BasePropsType';
import { IParentableBy } from './IParentableBy';
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
  Blueprint extends BaseBlueprint<BasePropsType>,
  ParentableBy extends BaseBlueprint<BasePropsType>
> = {
  blueprint: { new(): Blueprint & IParentableBy<BaseBlueprint<BasePropsType>> },
  // blueprint: {new(): Blueprint & IParentableBy<ParentableBlueprint>}
  props: PropsType,
  children: Array<
    RenderableType<
      BasePropsType,
      BaseBlueprint<BasePropsType> & IParentableBy<Blueprint>,
      Blueprint
    >
  >,
  _parentables?: ParentableBy
};