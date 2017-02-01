import { BaseBlueprint } from '../../types/BaseBlueprint';
import { BasePropsType } from '../../types/BasePropsType';
import { createComponent } from '../createComponent';
import { IParentableBy } from '../../types/IParentableBy';
import { RenderableType } from '../../types/Renderable';

import { _Paper } from './Paper';
import { LineStyleType, getLineStyle, setLineStyle } from './utils/lineStyleStore';

export type _RectangleParentTypes = _Paper
;
export type RectanglePropsType = {
  x: number, y: number,
  width: number, height: number,
  color?: number, alpha?: number,
  lineStyle?: LineStyleType,
} & BasePropsType
;

export class _Rectangle extends BaseBlueprint<RectanglePropsType>
    implements IParentableBy<_RectangleParentTypes> {
  parent: _RectangleParentTypes;
  prevProps: RectanglePropsType;
  init(parent: _RectangleParentTypes) {
    this.parent = parent;
    if (this.parent instanceof _Paper) {
      return;
    }
    // FIXME: throw error here.
  }
  updateBeforeChildren(props: RectanglePropsType) {
    const oldLineStyle = getLineStyle(this.parent.container);
    this.parent.container.beginFill(props.color, props.alpha || 1);
    this.parent.container.drawRect(props.x, props.y, props.width, props.height);
    this.parent.container.endFill();
    setLineStyle(this.parent.container, oldLineStyle);
  }
  updateAfterChildren(props: RectanglePropsType) {
  }
  delete() {
    if (this.parent instanceof _Paper) {
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