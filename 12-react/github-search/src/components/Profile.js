import React, { PureComponent as Component } from 'react';

export default class Profile extends Component {
  render() {
    return (
      <h2>Profile {this.props.match.params.username}</h2>
    );
  }
}
