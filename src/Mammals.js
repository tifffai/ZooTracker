import React, { Component } from 'react';
import MonkeyQuaters from './MonkeyQuaters';
import GiraffeQuaters from './GiraffeQuaters';
import ElephantQuaters from './ElephantQuaters';

class Mammals extends Component {
    constructor(props) {
        super(props);
        this.state = {
          totalClicks: 0
        }
      }
    
      updateMammals(operator) {
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
          <div className="Mammals" class="species-box">
            <h3>Mammals Residents: {this.state.totalClicks}</h3>
              <MonkeyQuaters updateAnimals={this.updateMammals.bind(this)}/>
              <ElephantQuaters updateAnimals={this.updateMammals.bind(this)}/>
              <GiraffeQuaters updateAnimals={this.updateMammals.bind(this)}/>
              </div>
    );
  }
}


export default Mammals;