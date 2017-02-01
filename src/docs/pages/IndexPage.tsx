import * as React from 'react';
import ReactWrapper from '../pageBlocks/ReactWrapper';
import { Stage } from '../../components/Stage';
import { Paper } from '../../components/Graphics/Paper';
import { Rectangle } from '../../components/Graphics/Rectangle';
export type PropsType = {

};
export type StateType = {
};


export default class IndexPage extends React.Component<PropsType, StateType> {
  rotation: number;
  refs: {
    [key: string]: React.ReactInstance;
    reactWrapper: ReactWrapper;
  }
  constructor(props: PropsType) {
    super(props);
    this.rotation = 0;
  }
  rotateBy(angle: number) {
    this.rotation = this.rotation + angle;
    this.updateGraphics();
  }
  updateGraphics() {
    const renderable = Stage({
      key: 'mainStage',
      // rotation: Math.PI * (this.rotation / 360),
    }, [
      Paper({
        key: 'graphics',
        // rotation: Math.PI * (this.rotation / 360),
        x: 0, y: 0,
        click: () => { this.rotateBy(30); console.error('clicked!'); },
        // alpha: 0.5,
      }, [
        Rectangle({
          key: 'rect',
          x: 0, y: this.rotation,
          height: 50, width: 100,
          color: 0x00ffff,
        }, []),
        Rectangle({
          key: 'rect_still',
          x: 50, y: 20,
          height: 200, width: 200,
          color: 0xFFFF00,
          alpha: 0.2,
        }, [])
      ])
    ]);
    this.refs.reactWrapper.update(renderable);
  }
  componentDidMount() {
    this.updateGraphics();
  }
  render() {
    return (
      <div>
        <ReactWrapper
          ref="reactWrapper"
        />
        {this.props.children}
        <button onClick={() => this.rotateBy(15)}>
          rotate!
        </button>
      </div>
    )
  }
}