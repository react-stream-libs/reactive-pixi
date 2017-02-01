/// <reference types="react" />
import * as React from 'react';
import Renderer, { RootRenderableType } from '../../Renderer';
export declare type PropsType = {};
export declare type StateType = {};
export default class ReactivePixiReactWrapper extends React.Component<PropsType, StateType> {
    refs: {
        [key: string]: HTMLElement;
        canvasRef: HTMLCanvasElement;
    };
    renderer: Renderer;
    componentDidMount(): void;
    update(renderable: RootRenderableType): void;
    render(): JSX.JSXElement;
}
