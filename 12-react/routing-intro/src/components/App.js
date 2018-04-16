import React, { Component } from 'react';
import Home from './Home';
import FAQ from './FAQ';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <FAQ />
      </div>
    );
  }
}

export default App;
