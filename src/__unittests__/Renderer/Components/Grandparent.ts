import { BaseBlueprint } from '../../../types/BaseBlueprint';
import { BasePropsType } from '../../../types/BasePropsType';
import { createComponent } from '../../../components/createComponent';
import { IParentableBy } from '../../../types/IParentableBy';
import { RenderableType } from '../../../types/Renderable';
import { _Root } from '../../../components/Root';

import Logger, { LogItem } from '../../Logger';

export type _GrandparentParentTypes = _Root;
;
export type GrandParentPropsType = {
} & BasePropsType;

export class __GrandParent extends BaseBlueprint<GrandParentPropsType>
    implements IParentableBy<_GrandparentParentTypes> {
  parent: _GrandparentParentTypes;
  logger: Logger;
  init(parent: _GrandparentParentTypes) { }
  update(props: GrandParentPropsType) { }
  delete() { }
}


export function getGrandparentComps(logger: Logger): {
  _GrandParent: typeof __GrandParent,
  GrandParent: (
    props: GrandParentPropsType,
    children: Array<
      RenderableType<
        BasePropsType,
        BaseBlueprint<BasePropsType> & IParentableBy<__GrandParent>,
        __GrandParent
      >
    >
  ) => RenderableType<GrandParentPropsType, __GrandParent, _GrandparentParentTypes>
} {
  class _GrandParent extends __GrandParent {
    name: string;
    constructor() {
      super();
      this.name = 'GrandParent';
      this.logger = logger;
    }
    init(parent: _GrandparentParentTypes) {
      this.logger.add(new LogItem({
        instance: this,
        blueprint: _GrandParent,
        type: 'init',
      }));
    }
    update(props: GrandParentPropsType) {
      this.logger.add(new LogItem({
        instance: this,
        blueprint: _GrandParent,
        type: 'update',
        props,
      }));
    }
    delete() {
      this.logger.add(new LogItem({
        instance: this,
        blueprint: _GrandParent,
        type: 'delete',
      }));
    }
  }
  const GrandParent = createComponent<
    _GrandParent,
    _GrandparentParentTypes,
    GrandParentPropsType
  >(_GrandParent);
  return {
    _GrandParent, GrandParent,
  }
}

export {
  RenderableType
}