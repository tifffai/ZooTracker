import React, { Component } from 'react';

class DragonQuarters extends Component {
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
            <h2>Dragon Quaters</h2>
            <p>Residents: {this.state.numOfClicks}</p>
            <button onClick={this.addAnimal.bind(this)}>Add Dragon🐲</button>
            <button onClick={this.removeAnimal.bind(this)}>Send Dragon to the moon🌜</button>
        </div>
        )
    }
}


export default DragonQuarters;