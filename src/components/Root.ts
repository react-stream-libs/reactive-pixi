import { SystemRenderer, Container } from 'pixi.js';

import { BaseBlueprint } from '../types/BaseBlueprint';
import { BasePropsType } from '../types/BasePropsType';
import { createComponent } from './createComponent';
import { IParentableBy } from '../types/IParentableBy';

export type _RootPropsType = {

} & BasePropsType;

export class _NoneExistentBlueprint extends BaseBlueprint<BasePropsType> {
  init(parent: BaseBlueprint<BasePropsType>) {}
  updateBeforeChildren(props: BasePropsType) {}
  updateAfterChildren(props: BasePropsType) {}
  delete() {}
}

export class _Root extends BaseBlueprint<BasePropsType> implements IParentableBy<_NoneExistentBlueprint> {
  container: Container;
  renderer: SystemRenderer;
  constructor(renderer?: SystemRenderer) {
    super();
    this.renderer = renderer;
    this.container = new Container();
  }
  init(parent: _NoneExistentBlueprint) {
  }
  updateBeforeChildren(props: BasePropsType) {

  }
  updateAfterChildren(props: BasePropsType) {
    this.renderer.render(this.container);
  }
  delete() {}
}

export const Root = createComponent<_Root, _NoneExistentBlueprint, _RootPropsType>(_Root);

export type _CirclePropsType = {

} & BasePropsType;

export type _CircleParentTypes = _Root;
export class _Circle extends BaseBlueprint<_RootPropsType>
    implements IParentableBy<_Root> {
  _circle: boolean;
  init(parent: _Root) {

  }
  updateBeforeChildren(props: _CirclePropsType) {

  }
  updateAfterChildren(props: _CirclePropsType) {

  }
  delete() {

  }
}

export default Root;

import { RenderableType } from '../types/Renderable';

export { RenderableType }


// export const Circle = createComponent<_Circle, _CircleParentTypes, _CirclePropsType>(_Circle);

// Root({
//   key: '123',
// }, [
//   Circle({
//     key: '1234',
//   }, [])
// ]);

// Circle({
//   key: '123',
// }, [
//   Root({
//     key: '123'
//   }, [])
// ])