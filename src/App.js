import React from 'react';
import Pet from './Pet.js';

export default class App extends React.Component {
  constructor(props) {
    super(props)
   

    this.state = {
      indicators: {
        experience: {
          value: 1,
        },
        majesty: {
          value: 1,
        },
        satisfaction: {
          value: 10,
          leaveReason: 'no satisfaction'
        },
        health: {
          value: 10,
          leaveReason: 'gemorroy' // actually I don't know this word
        },
        satiety: {
          value: 10,
          leaveReason: 'continuous hunger'
        },
        productivity: {
          value: 1,
          leaveReason: ' impostor syndrome'
        },
        money: {
          value: 10,
          leaveReason: 'depts'
        },
        salary: {
          value: 1,
        },
      },
    }



    this.actions = {
      learnNew: {
        name: 'Learn new tech',
        action: () => {}
      },
      goToConf: {
        name: 'Go to a conference',
        action: () => {
          this.setState(prevState => {
            console.log(this.state.indicators.experience)
            return {
              indicators:{
               experience: {value: prevState.indicators.experience.value + 1},
               majesty: {value: prevState.indicators.majesty.value + 1},
               satisfaction: {value: prevState.indicators.satisfaction.value + 1},
              }
            }
          }
          )}
        },
      petProject: {
        name: 'Work on a pet project',
        action: () => {
        }
      },
      gym: {
        name: 'Go to gym',
        action: () => {
        }
      },
      eat: {
        name: 'Eat!',
        action: () => {
        }
      },
      freelance: {
        name: 'take a project on freelance',
        action: () => {
        }
      },
      overtime: {
        name: 'work overtime',
        action: () => {this.forceUpdate()
        }
      },
      leave: {
        name: 'You left programming because of',
        action: reason => `${this.name} ${reason}`
      }
    }

  }


  render() {
    return (
      <div className="App">
        <Pet sharedState={this.state} actions={this.actions} />
      </div>
    );
  }
}


