import { BaseBlueprint } from '../../../types/BaseBlueprint';
import { BasePropsType } from '../../../types/BasePropsType';
import { createComponent } from '../../../components/createComponent';
import { IParentableBy } from '../../../types/IParentableBy';
import { RenderableType } from '../../../types/Renderable';
import { __Parent } from './Parent';

import Logger, { LogItem } from '../../Logger';

export type _ChildParentTypes = __Parent;
;
export type ChildPropsType = {
} & BasePropsType;

export class __Child extends BaseBlueprint<ChildPropsType>
    implements IParentableBy<_ChildParentTypes> {
  parent: _ChildParentTypes;
  logger: Logger;
  init(parent: _ChildParentTypes) {
    this.logger.add(new LogItem({
      instance: this,
      blueprint: __Child,
      type: 'init',
    }));
  }
  update(props: ChildPropsType) {
  }
  delete() {
  }
}


export function getChildComps(logger: Logger): {
  _Child: typeof __Child,
  Child: (
    props: ChildPropsType,
    children: Array<
      RenderableType<
        BasePropsType,
        BaseBlueprint<BasePropsType> & IParentableBy<__Child>,
        __Child
      >
    >
  ) => RenderableType<ChildPropsType, __Child, _ChildParentTypes>
} {
  class _Child extends __Child {
    constructor() {
      super();
      this.logger = logger;
    }
  }
  const Child = createComponent<
    _Child,
    _ChildParentTypes,
    ChildPropsType
  >(_Child);
  return {
    _Child, Child,
  }
}

export {
  RenderableType
}