import * as _ from 'lodash';
import { Container, Point } from 'pixi.js';
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
declare var window: any;
export class _Stage extends BaseBlueprint<StagePropsType>
    implements IParentableBy<_StageParentTypes> {
  container: Container;
  parent: _StageParentTypes;
  prevProps: StagePropsType;
  init(parent: _StageParentTypes) {
    window['stage'] = this;
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
      this.container.x = props.x || 0;
      this.container.y = props.y || 0;
      this.container.pivot = props.pivot || new Point(0, 0);
      this.container.rotation = props.rotation || 0;
      this.container.alpha = props.alpha || 1;
      console.error('updating Stage');
    }
    // FIXME: fix renderer part & move this to renderer.
    if (this.parent instanceof _Root) {
      this.parent.renderer.render(this.parent.container);
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