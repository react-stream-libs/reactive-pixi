import { Container } from 'pixi.js';
import { BaseBlueprint } from '../types/BaseBlueprint';
import { BasePropsType } from '../types/BasePropsType';
import { createComponent } from './createComponent';
import { IParentableBy } from '../types/IParentableBy';
import { RenderableType } from '../types/Renderable';

import { _Root } from './Root';

export type _StageParentTypes = _Stage
  | _Root
;
export type StagePropsType = {

} & BasePropsType;

export class _Stage extends BaseBlueprint<StagePropsType>
    implements IParentableBy<_StageParentTypes> {
  pixiContainer: Container;
  parent: _StageParentTypes;
  init(parent: _StageParentTypes) {
    this.pixiContainer = new Container();
    this.parent = parent;
    if (this.parent instanceof _Stage) {
      this.parent.pixiContainer.addChild(this.pixiContainer);
    }
  }
  update(props: StagePropsType) {
    if (this.parent instanceof _Root) {
      this.parent.renderer.render(this.pixiContainer);
    }
  }
  delete() {
    if (this.parent instanceof _Stage ) {
      this.parent.pixiContainer.removeChild(this.pixiContainer);
    }
    delete this.pixiContainer;
  }
}

export const Stage = createComponent<
  _Stage, _StageParentTypes,StagePropsType
>(_Stage);
export default Stage;
export {
  RenderableType
}