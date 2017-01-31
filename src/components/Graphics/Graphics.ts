import * as _ from 'lodash';
import { Graphics as PixiGraphics } from 'pixi.js';
import { BaseBlueprint } from '../../types/BaseBlueprint';
import { BasePropsType } from '../../types/BasePropsType';
import { createComponent } from '../createComponent';
import { IParentableBy } from '../../types/IParentableBy';
import { RenderableType } from '../../types/Renderable';
import { DisplayObjectPropsType } from '../../types/DisplayObjectPropsType';

import { _Root } from '../Root';
import { _Stage } from '../Stage';

export type _GraphicsParentTypes = _Graphics
  & _Stage
  & _Root
;
export type GraphicsPropsType = {

} & BasePropsType
  & DisplayObjectPropsType
;

export class _Graphics extends BaseBlueprint<GraphicsPropsType>
    implements IParentableBy<_GraphicsParentTypes> {
  container: PixiGraphics;
  parent: _GraphicsParentTypes;
  prevProps: GraphicsPropsType;
  init(parent: _GraphicsParentTypes) {
    this.container = new PixiGraphics();
    this.parent = parent;
    if (this.parent instanceof _Graphics) {
      this.parent.container.addChild(this.container);
    }
    if (this.parent instanceof _Root) {
      this.parent.container.addChild(this.container);
    }
  }
  updateBeforeChildren(props: GraphicsPropsType) {
    this.container.clear();
  }
  updateAfterChildren(props: GraphicsPropsType) {
    if (!_.isEqual(this.prevProps, props)) {
      this.container.x = props.x;
      this.container.y = props.y;
      this.container.rotation = props.rotation;
      this.container.alpha = props.alpha;
    }
  }
  delete() {
    if (this.parent instanceof _Graphics || this.parent instanceof _Root ) {
      this.parent.container.removeChild(this.container);
      delete this.container;
      return;
    }
    // FIXME: throw error here.
  }
}

export const Graphics = createComponent<
  _Graphics, _GraphicsParentTypes,GraphicsPropsType
>(_Graphics);
export default Graphics;
export {
  RenderableType
}