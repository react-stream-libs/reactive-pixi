import * as React from 'react';
import ReactWrapper from '../pageBlocks/ReactWrapper';
import { RootRenderableType } from '../../Renderer';
import { Stage } from '../../components/Stage';
import { Graphics } from '../../components/Graphics/Graphics';
import { Rectangle } from '../../components/Graphics/Rectangle';
export type PropsType = {

};
export type StateType = {

};


export default class IndexPage extends React.Component<PropsType, StateType> {
  refs: {
    [key: string]: React.ReactInstance;
    reactWrapper: ReactWrapper;
  }
  updateGraphics(renderable: RootRenderableType) {
    this.refs.reactWrapper.update(renderable);
  }
  componentDidMount() {
    this.updateGraphics(
      Stage({
        key: 'mainStage'
      }, [
        Graphics({
          key: 'graphics'
        }, [
          Rectangle({
            key: 'rect',
            x: 0, y: 0,
            height: 100, width: 100,
          }, []),
        ])
      ])
    );
  }
  render() {
    return (
      <div>
        <ReactWrapper
          ref="reactWrapper"
        />
        {this.props.children}
      </div>
    )
  }
}