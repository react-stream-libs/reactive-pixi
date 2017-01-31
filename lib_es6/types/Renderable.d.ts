import { BaseBlueprint } from './BaseBlueprint';
import { BasePropsType } from './BasePropsType';
import { IParentableBy } from './IParentableBy';
export declare type RenderableType<PropsType extends BasePropsType, Blueprint extends BaseBlueprint<BasePropsType>, ParentableBy extends BaseBlueprint<BasePropsType>> = {
    blueprint: {
        new (): Blueprint & IParentableBy<BaseBlueprint<BasePropsType>>;
    };
    props: PropsType;
    children: Array<RenderableType<BasePropsType, BaseBlueprint<BasePropsType> & IParentableBy<Blueprint>, Blueprint>>;
    _parentables?: ParentableBy;
};
