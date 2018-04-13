import React, {PureComponent} from 'react';

class Calculator extends PureComponent {
  constructor(props) {
    super(props); // Receiving and passing props to super is a convention.
    this.state = { a: 0, b: 0 };
    this._updateA = this._updateA.bind(this);
    this._updateB = this._updateB.bind(this);
  }

  _updateA(event) {
    // Convert the input to a number (or 0 as a default)
    const a = parseFloat( event.target.value ) || 0;
    this.setState({ a }); // Equivalent to: { a: a }
  }

  _updateB(event) {
    const b = parseFloat( event.target.value ) || 0;
    this.setState({ b }); // Equivalent to: { b: b }
  }

  render() {
    const {a, b} = this.state; // Destructuring.

    return (
      <div>
        <h1>Less Crappy Calculator</h1>
        <input type="number" value={this.state.a} onChange={this._updateA} />
        <input type="number" value={this.state.b} onChange={this._updateB} />

        <h2>Results</h2>
        <p>{ a } + { b } = { a + b }</p>
        <p>{ a } - { b } = { a - b }</p>
        <p>{ a } * { b } = { a * b }</p>
        <p>{ a } / { b } = { a / b }</p>
      </div>
    );
  }
}

export default Calculator;
