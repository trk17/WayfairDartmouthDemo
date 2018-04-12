import React, { Component } from 'react';

export default class ParentComponent extends Component {

  state = {
    tempNumber: null,
    currentNumber: null,
    photo_id : []
  }

  addNumberToArray = () => {
    this.setState({ currentNumber: this.state.tempNumber });
  }

  onInputChange(number) {
    this.setState({ tempNumber: number });
  }

  clearNumber = ()  => {
    this.setState({ currentNumber: null });
  }

  render() {
    return (
      <div>
      {/* everything needs to be in one div */}
        <h1>Lets learn about state, folks</h1>
          <p>Enter a number:</p>
          <input
            type="text"
            name="numbers"
            className="form-check-input"
            placeholder="Enter your number"
            onChange={event => this.onInputChange(event.target.value)}
          />
          <input
            type="button"
            name="number_button"
            className="btn btn-primary"
            value="submit"
            onClick={this.addNumberToArray}
          />
          <input
            type="button"
            name="clear_button"
            className="btn btn-danger"
            value= "clear array"
            onClick={this.clearNumber}
          />

          {this.state.currentNumber &&
          <div>
            Your number is:
            {this.state.currentNumber}
          </div>}
      </div>
    );
  }
}
