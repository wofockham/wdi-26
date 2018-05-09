import React, { PureComponent as Component } from 'react';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { username: 'coldhead' };
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(e) {
    this.setState({
      username: e.target.value
    });
  }

  _handleSubmit(e) {
    e.preventDefault();
    const username = this.state.username;
    this.context.router.history.push(`/details/${ username }`);
  }

  render() {
    return (
      <div>
        <h2>Search by username</h2>
        <form onSubmit={this._handleSubmit}>
          <input type="search" onChange={this._handleChange} value={this.state.username} />
          <button>Search for { this.state.username }</button>
        </form>
      </div>
    );
  }
}
