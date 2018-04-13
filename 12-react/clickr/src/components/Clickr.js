import React, { PureComponent } from 'react';

class Clickr extends PureComponent {

  constructor() {
    /* oh */ super(); // calls the original version of constructor() defined in PureComponent
    this.state = { clicks: 0 };
    this._incrementClicks = this._incrementClicks.bind(this); // Preserve connection to original object.
  }

  _incrementClicks() {
    this.setState( { clicks: this.state.clicks + 1 } );
  }

  render() {
    return (<button onClick={ this._incrementClicks }>{ this.state.clicks } clicks so far</button>);
  }
}

export default Clickr;
