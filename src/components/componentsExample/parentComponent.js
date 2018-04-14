import React, { Component } from 'react';
import ChildComponent from './childComponent';

export default class ParentComponent extends Component {

  state = {
    currentNumber: null,
    numberArray: []
  };

  addNumberToArray = () => {
    this.setState((prevState) => ({
          numberArray: [...prevState.numberArray, prevState.currentNumber],
          currentNumber: null
      }));
  };

  changeCurrentNumber = event => {
    this.setState({ currentNumber: event.target.value});
  };

  clearNumberArray = ()  => {
    this.setState({ numberArray: [] });
  };

  render() {
    return (
      <div>
      {/* everything needs to be in one div */}
        <h1>Lets learn about state, folks</h1>
          <p>Enter a number:</p>
          <input
            type="text"
            className="form-check-input"
            placeholder="Enter your number"
            value={this.state.currentNumber}
            onChange={this.changeCurrentNumber}
          />
          <input
            type="button"
            className="btn btn-primary"
            value="submit"
            onClick={this.addNumberToArray}
          />
          <input
            type="button"
            className="btn btn-danger"
            value= "clear array"
            onClick={this.clearNumberArray}
          />
          <div>
            <br/>
            this.state.currentNumber:
            {this.state.currentNumber}
            <br/>
            this.state.finalNumber:
          </div>
          {(this.state.numberArray !== []) &&
          <div>
            {this.state.numberArray.toString()}
          </div>}
          <br/>
          <ChildComponent
              pictureNumberArray={this.state.numberArray}
          />
      </div>
    );
  }
}
