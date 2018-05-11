import React, { PureComponent as Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 }; // count zero interrupt
  }

  render() {
    return (
      <div>
        <h1>Fancy Counter</h1>
        <p>current count: {this.state.count}</p>
        <button onClick={ () => this.setState({ count: this.state.count + 1 }) }>+</button>
        <button onClick={ () => this.setState({ count: this.state.count - 1 }) }>-</button>
      </div>
    );
  }
}

export default Counter;
