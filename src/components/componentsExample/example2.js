import React, { Component } from 'react';

export default class ParentComponent extends Component {

  state = {
    photo_id : []
  }

  addNumberToArray = () => {
    console.log(this.state.currentNumber)
  }

  render() {
    return (
      <div>
      {/* everything needs to be in one div */}
        <h1>Lets learn about state, folks</h1>
          <p>Enter a number:</p> <input type="text" name="numbers" value={this.state.currentNumber}/>
          <input type="button" name="number_button" value="submit" onClick={() => this.addNumberToArray()}/>
          <br/>
          <input type="button" name="clear_button" value= "clear array"/>
      </div>
    );
  }
}
