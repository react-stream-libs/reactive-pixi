import { BaseBlueprint } from '../../../types/BaseBlueprint';
import { BasePropsType } from '../../../types/BasePropsType';
import { IParentableBy } from '../../../types/IParentableBy';
import { RenderableType } from '../../../types/Renderable';
import { __Parent } from './Parent';
import Logger from '../../Logger';
export declare type _ChildParentTypes = __Parent;
export declare type ChildPropsType = {} & BasePropsType;
export declare class __Child extends BaseBlueprint<ChildPropsType> implements IParentableBy<_ChildParentTypes> {
    parent: _ChildParentTypes;
    logger: Logger;
    init(parent: _ChildParentTypes): void;
    updateBeforeChildren(props: ChildPropsType): void;
    updateAfterChildren(props: ChildPropsType): void;
    delete(): void;
}
export declare function getChildComps(logger: Logger): {
    _Child: typeof __Child;
    Child: (props: ChildPropsType, children: Array<RenderableType<BasePropsType, BaseBlueprint<BasePropsType> & IParentableBy<__Child>, __Child>>) => RenderableType<ChildPropsType, __Child, _ChildParentTypes>;
};
export { RenderableType };
