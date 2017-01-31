import { BaseBlueprint } from '../../../types/BaseBlueprint';
import { BasePropsType } from '../../../types/BasePropsType';
import { createComponent } from '../../../components/createComponent';
import { IParentableBy } from '../../../types/IParentableBy';
import { RenderableType } from '../../../types/Renderable';
import { __GrandParent } from './Grandparent';

import Logger, { LogItem } from '../../Logger';

export type _ParentParentTypes = __GrandParent;
;
export type ParentPropsType = {
} & BasePropsType;

export class __Parent extends BaseBlueprint<ParentPropsType>
    implements IParentableBy<_ParentParentTypes> {
  parent: _ParentParentTypes;
  logger: Logger;
  init(parent: _ParentParentTypes) { }
  updateBeforeChildren(props: ParentPropsType) { }
  updateAfterChildren(props: ParentPropsType) { }
  delete() { }
}


export function getParentComps(logger: Logger): {
  _Parent: typeof __Parent,
  Parent: (
    props: ParentPropsType,
    children: Array<
      RenderableType<
        BasePropsType,
        BaseBlueprint<BasePropsType> & IParentableBy<__Parent>,
        __Parent
      >
    >
  ) => RenderableType<ParentPropsType, __Parent, _ParentParentTypes>
} {
  class _Parent extends __Parent {
    constructor() {
      super();
      this.logger = logger;
    }
    init(parent: _ParentParentTypes) {
      this.logger.add(new LogItem({
        instance: this,
        blueprint: _Parent,
        type: 'init',
      }));
    }
    updateAfterChildren(props: ParentPropsType) {
      this.logger.add(new LogItem({
        instance: this,
        blueprint: _Parent,
        type: 'update',
        props,
      }));
    }
    delete() {
      this.logger.add(new LogItem({
        instance: this,
        blueprint: _Parent,
        type: 'delete',
      }));
    }
  }
  const Parent = createComponent<
    _Parent,
    _ParentParentTypes,
    ParentPropsType
  >(_Parent);
  return {
    _Parent, Parent,
  }
}

export {
  RenderableType
}