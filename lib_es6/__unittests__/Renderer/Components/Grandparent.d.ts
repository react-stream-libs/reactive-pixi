import { BaseBlueprint } from '../../../types/BaseBlueprint';
import { BasePropsType } from '../../../types/BasePropsType';
import { IParentableBy } from '../../../types/IParentableBy';
import { RenderableType } from '../../../types/Renderable';
import { _Root } from '../../../components/Root';
import Logger from '../../Logger';
export declare type _GrandparentParentTypes = _Root;
export declare type GrandParentPropsType = {} & BasePropsType;
export declare class __GrandParent extends BaseBlueprint<GrandParentPropsType> implements IParentableBy<_GrandparentParentTypes> {
    parent: _GrandparentParentTypes;
    logger: Logger;
    init(parent: _GrandparentParentTypes): void;
    updateBeforeChildren(props: GrandParentPropsType): void;
    updateAfterChildren(props: GrandParentPropsType): void;
    delete(): void;
}
export declare function getGrandparentComps(logger: Logger): {
    _GrandParent: typeof __GrandParent;
    GrandParent: (props: GrandParentPropsType, children: Array<RenderableType<BasePropsType, BaseBlueprint<BasePropsType> & IParentableBy<__GrandParent>, __GrandParent>>) => RenderableType<GrandParentPropsType, __GrandParent, _GrandparentParentTypes>;
};
export { RenderableType };
