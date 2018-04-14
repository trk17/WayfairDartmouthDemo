import React, { Component } from 'react';
import DisplayChart from './displayChart'

export default class ParentChartComponent extends Component {

  state = {
    currentNumber: null,
    currentString: null,
    data: []
  };

  addDateToArray = () => {
    this.setState((prevState) => ({
          data: [...prevState.data, {'name': prevState.currentString, 'value': parseInt(prevState.currentNumber)}],
          currentNumber: null,
          currentString: null
      }));
  };

  changeCurrentNumber = event => {
    this.setState({ currentNumber: event.target.value});
  };

  changeCurrentString = event => {
    this.setState({ currentString: event.target.value });
  }

  clearNumberArray = ()  => {
    this.setState({ data: [] });
  };

  render() {
    const chartData = this.state.data.slice()

    return (
      <div>
      {/* everything needs to be in one div */}
        <h1>Why are you exhausted in the morning?</h1>
          <p>Amount:</p>
          <input
            type="text"
            className="form-check-input"
            placeholder="Enter your amount"
            value={this.state.currentNumber}
            onChange={this.changeCurrentNumber}
          />
          < br/>
          <p>Reason:</p>
          <input
            type="text"
            className="form-check-input"
            placeholder="Enter your reason"
            value={this.state.currentString}
            onChange={this.changeCurrentString}
          />
          < br/>
          <input
            type="button"
            className="btn btn-primary"
            value="submit"
            onClick={this.addDateToArray}
          />
          <input
            type="button"
            className="btn btn-danger"
            value= "clear array"
            onClick={this.clearNumberArray}
          />

          <DisplayChart data={this.state.data} />

      </div>
    );
  }
}
