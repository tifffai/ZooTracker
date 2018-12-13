import React, { Component } from 'react';

// class MonkeyButton extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         numOfClicks: 0
//       }
//     }
//     incrementClicks() {
//       const currentNum = this.state.numOfClicks;
//       this.setState({ numOfClicks: currentNum + 1});
//       this.props.updateClick()
//     }
//     render() {
//       return <button onClick={this.incrementClicks.bind(this)}>Monkeys🐒: {this.state.numOfClicks}</button>;
//     }
//   }

class MonkeyQuaters extends Component {
  constructor(props) {
      super(props);
      this.state = {
      numOfClicks: 0
      }
  }
  addAnimal() {
    const currentNum = this.state.numOfClicks;
    this.setState({ numOfClicks: currentNum + 1});
    this.props.updateAnimals('add')
}
removeAnimal() {
    const currentNum = this.state.numOfClicks;
    if (currentNum == 0) {
      alert('No animals left to send! 😢')
    } else {
      this.setState({ numOfClicks: currentNum - 1});
      this.props.updateAnimals()
    }
}
  render() {
    return (
      <div>
        <h2>Monkey Quaters</h2>
        <p>Residents: {this.state.numOfClicks}</p>
        <button onClick={this.addAnimal.bind(this)}>Add Monkeys🐒</button>
        <button onClick={this.removeAnimal.bind(this)}>Send Monkeys to Party🎉</button>
      </div>
    )
  }
}

export default MonkeyQuaters;