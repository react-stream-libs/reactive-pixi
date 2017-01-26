import {
  SystemRenderer,
} from 'pixi.js';

import { RenderableType } from './types/Renderable';
import { BaseBlueprint } from './types/BaseBlueprint';
import { BasePropsType } from './types/BasePropsType';
import { InstanceTreeType } from './types/InstanceTree';

import { _Root } from './components/Root';

export class ReactivePixiRenderer {
  renderer: SystemRenderer;
  instanceTree: InstanceTreeType;
  constructor(args: {
    renderer: SystemRenderer,
  }) {
    this.renderer = args.renderer;
    this.instanceTree = {
      instance: new _Root(),
      children: {},
    };
  }
  render(toRender: RenderableType<BasePropsType, BaseBlueprint, BaseBlueprint>) {
    let renderable = toRender;

  }
}