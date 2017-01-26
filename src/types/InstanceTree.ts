import { BaseBlueprint } from './BaseBlueprint';

export type InstanceTreeType = {
  instance: BaseBlueprint,
  children: {
    [key: string]: InstanceTreeType,
  }
};