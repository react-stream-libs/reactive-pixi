import { BaseBlueprint } from './BaseBlueprint';
import { BasePropsType } from './BasePropsType';
import { IParentableBy } from './IParentableBy';

export type InstanceTreeType = {
  instance: BaseBlueprint<BasePropsType> & IParentableBy<BaseBlueprint<BasePropsType>>,
  children: {
    [key: string]: InstanceTreeType,
  }
};