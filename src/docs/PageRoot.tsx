import * as React from 'react';
import Header from './pageBlocks/header';

export type PropsType = {

};
export type StateType = {

};
export default class PageRoot extends React.Component<PropsType, StateType> {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    )
  }
}