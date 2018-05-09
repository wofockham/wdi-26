import React, { PureComponent as Component } from 'react';
import Github from '../utils';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { user: null, repos: null  };
  }

  // React component lifecycle
  componentDidMount() {
    const username = this.props.match.params.username; // Check React dev tools to see where this comes from.
    Github.getUserInfo(username).then( (info) => {
      this.setState({user: info.data});
    });
    Github.getUserRepos(username).then( (info) => {
      this.setState({repos: info.data});
    })
  }

  render() {
    return (
      <div>
        <h2>Github User Details</h2>
        <UserInfo user={this.state.user} />
        <Repositories repos={this.state.repos} />
      </div>
    );
  }
}

class UserInfo extends Component {
  render() {
    if (this.props.user === null) {
      return(<div className="info">Loading...</div>);
    }

    // Destructure
    const { login, followers, following, public_repos, public_gists } = this.props.user;

    return (
      <div className="info">
        <h3>Stats for {login}</h3>
        <p>Followers: {followers}</p>
        <p>Following: {following}</p>
        <p>Repos: {public_repos}</p>
        <p>Gists: {public_gists}</p>
      </div>
    )
  }
};

class Repositories extends Component {
  render() {
    if (this.props.repos === null) {
      return (<div className="repos">Loading...</div>);
    }

    const userRepos = this.props.repos.map( (r) => {
      return (
        <li>
          <a href={r.html_url} target="_blank">
            {r.name}
          </a>
        </li>
      )
    });

    return (
      <div className="repos">
        <h3>User Repositories</h3>
        <ul>
          {userRepos}
        </ul>
      </div>
    )
  }
}
