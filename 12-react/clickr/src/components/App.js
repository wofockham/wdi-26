import React, { Component } from 'react';
import Clickr from './Clickr';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clickr />
        <Clickr />
        <Clickr />
      </div>
    );
  }
}

export default App;
