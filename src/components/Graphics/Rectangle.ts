import { BaseBlueprint } from '../../types/BaseBlueprint';
import { BasePropsType } from '../../types/BasePropsType';
import { createComponent } from '../createComponent';
import { IParentableBy } from '../../types/IParentableBy';
import { RenderableType } from '../../types/Renderable';

import { _Graphics } from './Graphics';
import { LineStyleType, getLineStyle, setLineStyle } from './utils/lineStyleStore';

export type _RectangleParentTypes = _Graphics
;
export type RectanglePropsType = {
  x: number, y: number,
  width: number, height: number,
  lineStyle?: LineStyleType,
} & BasePropsType
;

export class _Rectangle extends BaseBlueprint<RectanglePropsType>
    implements IParentableBy<_RectangleParentTypes> {
  parent: _RectangleParentTypes;
  prevProps: RectanglePropsType;
  init(parent: _RectangleParentTypes) {
    this.parent = parent;
    if (this.parent instanceof _Graphics) {
      return;
    }
    // FIXME: throw error here.
  }
  updateBeforeChildren(props: RectanglePropsType) {
    const oldLineStyle = getLineStyle(this.parent.container);
    this.parent.container.drawRect(props.x, props.y, props.width, props.height);
    setLineStyle(this.parent.container, oldLineStyle);
  }
  updateAfterChildren(props: RectanglePropsType) {
  }
  delete() {
    if (this.parent instanceof _Graphics) {
      return;
    }
    // FIXME: throw error here.
  }
}

export const Rectangle = createComponent<
  _Rectangle, _RectangleParentTypes,RectanglePropsType
>(_Rectangle);
export default Rectangle;
export {
  RenderableType
}