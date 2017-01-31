import * as React from 'react';

export type PropsType = {

};
export type StateType = {

};
export default class StageDemoPage
 extends React.Component<PropsType, StateType> {
  render() {
    return (
      <div>
        <p> home page </p>
        <p> home page </p>
        {this.props.children}
      </div>
    )
  }
}