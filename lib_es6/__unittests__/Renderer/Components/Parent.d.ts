import { BaseBlueprint } from '../../../types/BaseBlueprint';
import { BasePropsType } from '../../../types/BasePropsType';
import { IParentableBy } from '../../../types/IParentableBy';
import { RenderableType } from '../../../types/Renderable';
import { __GrandParent } from './Grandparent';
import Logger from '../../Logger';
export declare type _ParentParentTypes = __GrandParent;
export declare type ParentPropsType = {} & BasePropsType;
export declare class __Parent extends BaseBlueprint<ParentPropsType> implements IParentableBy<_ParentParentTypes> {
    parent: _ParentParentTypes;
    logger: Logger;
    init(parent: _ParentParentTypes): void;
    updateBeforeChildren(props: ParentPropsType): void;
    updateAfterChildren(props: ParentPropsType): void;
    delete(): void;
}
export declare function getParentComps(logger: Logger): {
    _Parent: typeof __Parent;
    Parent: (props: ParentPropsType, children: Array<RenderableType<BasePropsType, BaseBlueprint<BasePropsType> & IParentableBy<__Parent>, __Parent>>) => RenderableType<ParentPropsType, __Parent, _ParentParentTypes>;
};
export { RenderableType };
