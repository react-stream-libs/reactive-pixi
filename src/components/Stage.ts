import * as _ from 'lodash';
import { Container } from 'pixi.js';
import { BaseBlueprint } from '../types/BaseBlueprint';
import { BasePropsType } from '../types/BasePropsType';
import { createComponent } from './createComponent';
import { IParentableBy } from '../types/IParentableBy';
import { RenderableType } from '../types/Renderable';
import { DisplayObjectPropsType } from '../types/DisplayObjectPropsType';

import { _Root } from './Root';

export type _StageParentTypes = _Stage
  & _Root
;
export type StagePropsType = {

} & BasePropsType
  & DisplayObjectPropsType
;

export class _Stage extends BaseBlueprint<StagePropsType>
    implements IParentableBy<_StageParentTypes> {
  container: Container;
  parent: _StageParentTypes;
  prevProps: StagePropsType;
  init(parent: _StageParentTypes) {
    this.container = new Container();
    this.parent = parent;
    if (this.parent instanceof _Stage) {
      this.parent.container.addChild(this.container);
    }
    if (this.parent instanceof _Root) {
      this.parent.container.addChild(this.container);
    }
  }
  updateBeforeChildren(props: StagePropsType) {

  }
  updateAfterChildren(props: StagePropsType) {
    if (!_.isEqual(this.prevProps, props)) {
      this.container.x = props.x;
      this.container.y = props.y;
      this.container.rotation = props.rotation;
      this.container.alpha = props.alpha;
    }
  }
  delete() {
    if (this.parent instanceof _Stage || this.parent instanceof _Root ) {
      this.parent.container.removeChild(this.container);
      delete this.container;
      return;
    }
    // FIXME: throw error here.
  }
}

export const Stage = createComponent<
  _Stage, _StageParentTypes, StagePropsType
>(_Stage);
export default Stage;
export {
  RenderableType
}