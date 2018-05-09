import React, { PureComponent as Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div class="app">
        <h1>Github Search</h1>
        <Link to="/search">
          <button>Search for a user</button>
        </Link>
        <button>Random user</button>
      </div>
    )
  }
}
