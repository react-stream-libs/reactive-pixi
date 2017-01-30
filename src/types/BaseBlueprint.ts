import { BasePropsType } from './BasePropsType';

export abstract class BaseBlueprint<PropsType extends BasePropsType> {
  abstract update(props: PropsType): any;
  abstract delete(): any;
}