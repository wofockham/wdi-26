import React, { PureComponent as Component } from 'react';

export default class Task extends Component {
  render() {
    return (
      <li>{this.props.task.text}</li>
    );
  }
}
