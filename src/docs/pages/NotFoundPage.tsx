import * as React from 'react';

export type PropsType = {

};
export type StateType = {

};
export default class NotFoundPage extends React.Component<PropsType, StateType> {
  render() {
    return (
      <div>
        <p> not found page </p>
        {this.props.children}
      </div>
    )
  }
}