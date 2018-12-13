import React, { Component } from 'react';
import DragonQuarters from './Dragon';
import TrexQuarters from './Trex';

class Dinosaurs extends Component {
    constructor(props) {
        super(props);
        this.state = {
          totalClicks: 0
        }
      }
    
      updateDinosaurs(operator) {
        const currentTotal = this.state.totalClicks;
        if (operator === 'add') {
          this.setState({ totalClicks: currentTotal + 1 });
          this.props.updateAnimals('add')
        } else {
          this.setState({ totalClicks: currentTotal - 1 });
          this.props.updateAnimals('')
        }
      }
    
      render() {
        return (
            <div className="Dinosaurs" class="species-box">
                <h3>Mammals Residents: {this.state.totalClicks}</h3>
                <DragonQuarters updateAnimals={this.updateDinosaurs.bind(this)}/>
                <TrexQuarters updateAnimals={this.updateDinosaurs.bind(this)}/>
            </div>
    );
  }
}


export default Dinosaurs;