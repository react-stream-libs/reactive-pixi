import * as React from 'react';
import { findDOMNode } from 'react-dom';
import { autoDetectRenderer } from 'pixi.js';
import Renderer, { RootRenderableType } from '../../Renderer';

export type PropsType = {

};
export type StateType = {

};
export default class ReactivePixiReactWrapper
    extends React.Component<PropsType, StateType> {
  refs: {
    [key: string]: HTMLElement;
    canvasRef: HTMLCanvasElement;
  }
  renderer: Renderer;
  componentDidMount() {
    const canvasDOM = findDOMNode<HTMLCanvasElement>(this.refs.canvasRef);
    // FIXME: autoDetectRenderer doesn't seem to work.
    const pixiRenderer = autoDetectRenderer(500, 500, {
      view: canvasDOM,
    });
    this.renderer = new Renderer({
      renderer: pixiRenderer,
    });
  }
  update(renderable: RootRenderableType) {
    this.renderer.render(renderable);
  }
  render() {
    return (
      <canvas
        ref="canvasRef"
      />
    );
  }
}