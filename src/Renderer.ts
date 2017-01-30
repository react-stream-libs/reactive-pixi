import {
  SystemRenderer,
} from 'pixi.js';

import { RenderableType } from './types/Renderable';
import { BaseBlueprint } from './types/BaseBlueprint';
import { BasePropsType } from './types/BasePropsType';
import { InstanceTreeType } from './types/InstanceTree';
import { IParentableBy } from './types/IParentableBy';

import Root, { _Root } from './components/Root';
import * as _ from 'lodash';

export class ReactivePixiRenderer {
  renderer: SystemRenderer;
  instanceTree: InstanceTreeType;
  constructor(args: {
    renderer: SystemRenderer,
  }) {
    this.renderer = args.renderer;
    this.instanceTree = {
      instance: new _Root(this.renderer),
      children: {},
    };
  }
  render(toRender?: RenderableType<
    BasePropsType,
    BaseBlueprint<BasePropsType> & IParentableBy<_Root>,
    _Root
  >) {
    const renderRoot = Root({
      key: '__ROOT__',
    }, _.compact([
      toRender,
    ]));
    render(this.instanceTree, renderRoot);
  }
}

// FIXME: implement a loop-variant for speed up!
export function render(
  instanceTree: InstanceTreeType,
  toRender: RenderableType<
    BasePropsType,
    BaseBlueprint<BasePropsType>,
    BaseBlueprint<BasePropsType>
  >
) {
  const toRenderChildrenMap = _.reduce<
    RenderableType<
      BasePropsType,
      BaseBlueprint<BasePropsType>,
      BaseBlueprint<BasePropsType>
    >,
    {
      [key: string]: RenderableType<
        BasePropsType,
        BaseBlueprint<BasePropsType>,
        BaseBlueprint<BasePropsType>
      >
    }
  >(
    toRender.children,
    (mappedChildren, child) => {
      mappedChildren[child.props.key] = child;
      return mappedChildren;
  }, {});
  _.forEach(instanceTree.children, (instanceTreeChild, key) => {
    if (!toRenderChildrenMap[key]
      || !(instanceTreeChild.instance instanceof toRenderChildrenMap[key].blueprint)
    ) {
      deleteChild(instanceTree, key);
    }
  });
  _.forEach(toRender.children, (renderableChild, renderableChildKey) => {
    const key = renderableChild.props.key;
    if (!instanceTree.children[key]) {
      const childInstance = new renderableChild.blueprint();
      childInstance.init(instanceTree.instance);
      instanceTree.children[key] = {
        instance: childInstance,
        children: {}
      }
    }
    const childInstanceTree = instanceTree.children[key];
    render(childInstanceTree, renderableChild);
    childInstanceTree.instance.update(renderableChild.props);
  });

}

export function deleteChild(
  instanceTree: InstanceTreeType, childKey: string
) {
  const childToDelete = instanceTree.children[childKey];
  _.forEach(childToDelete.children,
    (childOfChild, key) => deleteChild(childToDelete, key)
  );
  childToDelete.instance.delete();
  delete instanceTree.children[childKey];
}

export default ReactivePixiRenderer;