import React, { Component } from 'react';

import './App.css';
import Mammals from './Mammals'
import Dinosaurs from './Dinosaurs';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalClicks: 0
    }
  }

  updateTotalnimals(operator) {
    const currentTotal = this.state.totalClicks;
    if (operator === 'add') {
      this.setState({ totalClicks: currentTotal + 1 });
    } else {
      this.setState({ totalClicks: currentTotal - 1 });
    }
  }

  render() {
    return (
      <div className="App">
        <div class="title-box">
          <h1>React Zoo</h1>  
          <h2>Welcome to React Zoo</h2>
          <h4>CURRENT TOTAL ZOO RESIDENTS: {this.state.totalClicks}</h4>
        </div>

        <br></br>
        <br></br>
        <br></br>

        <div class="animals-box">
          <Mammals updateAnimals={this.updateTotalnimals.bind(this)}/>
          <br></br>
          <br></br>
          <br></br>
          <Dinosaurs updateAnimals={this.updateTotalnimals.bind(this)}/>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
    );
  }
}




export default App;
