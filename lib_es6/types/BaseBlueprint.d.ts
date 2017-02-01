import { BasePropsType } from './BasePropsType';
export declare abstract class BaseBlueprint<PropsType extends BasePropsType> {
    abstract updateBeforeChildren(props: PropsType): any;
    abstract updateAfterChildren(props: PropsType): any;
    abstract delete(): any;
}
