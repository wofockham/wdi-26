import React, { PureComponent as Component } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

const SERVER_URL = 'http://0beb00ee.ngrok.io/secrets.json'; // 'http://localhost:3333/secrets.json';

class SecretForm extends Component {
  constructor(props) {
    super(props);
    this.state = { content: '' };
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(e) {
    this.setState( { content: e.target.value } );
  }

  _handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.content);
    this.setState({content: ''});
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <textarea onChange={this._handleChange} value={this.state.content}></textarea>
        <input type="submit" value="Tell" />
      </form>
    );
  }
}

SecretForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

function Gallery(props) {
  return (
    <div>
      { props.secrets.map( s => <p key={s.id}>{s.content}</p> ) }
    </div>
  );
}


class Secrets extends Component {
  constructor(props) {
    super(props);
    this.state = { secrets: [] };
    this.saveSecret = this.saveSecret.bind(this);

    // Polling
    const fetchSecrets = () => { // Fat arrow functions do not break the connection to this.
      axios.get(SERVER_URL).then( results => this.setState( { secrets: results.data } ) );
      setTimeout(fetchSecrets, 4000); // Recursion
    }

    fetchSecrets();
  }

  saveSecret(s) {
    // This will not work
    axios.post(SERVER_URL, {content: s}).then((results) => {
      this.setState( { secrets: [results.data, ...this.state.secrets] } ); // Spread operator
    });
  }

  render() {
    return (
      <div>
        <h1>Tell Us All Your Secrets</h1>
        <SecretForm onSubmit={this.saveSecret} />
        <Gallery secrets={this.state.secrets} />
      </div>
    );
  }
}

export default Secrets;
