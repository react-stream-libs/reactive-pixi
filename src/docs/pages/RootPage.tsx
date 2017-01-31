import * as React from 'react';

export type PropsType = {

};
export type StateType = {

};
export default class RootPage extends React.Component<PropsType, StateType> {
  render() {
    return (
      <div>
        <p> root page </p>
        {this.props.children}
      </div>
    )
  }
}