import React from 'react'
import Grid from 'material-ui/Grid'

import './assets/App.css'

import Indicators from './Indicators/Indicators.js'
import Gif from './Gif/Gif.js'
import Actions from './Actions/Actions.js'

export default class App extends React.Component {
	constructor(props) {
		super(props)
	    this.state = {
	    	gif: './assets/junior.png',
			  indicators: {
			    experience: {
			      value: 5,
			    },
			    majesty: {
			      value: 5,
			      leaveReason: 'being bored'
			    },
			    productivity: {
			      value: 5,
			      leaveReason: 'impostor syndrome'
			    },
			    salary: {
			      value: 25,
			    },
			    money: {
			      value: 100,
			      leaveReason: 'depts'
			    },
			    satisfaction: {
			      value: 100,
			      leaveReason: 'no satisfaction'
			    },
			    health: {
			      value: 100,
			      leaveReason: 'hemorrhoids'
			    },
			    satiety: {
			      value: 100,
			      leaveReason: 'continuous hunger'
			    },
			  },
			}

	  this.actions = {
	      learnNew: {
	        name: 'Learn new tech',
	        action: () => {
	          this.setState(prevState => {
	            return {
	            	gif: './assets/learn.gif',
	             indicators:Object.assign(this.state.indicators,{
	               experience: {
	                leaveReason: prevState.indicators.experience.leaveReason,
	                value: prevState.indicators.experience.value + 0.5},
	               majesty: {
	                leaveReason: prevState.indicators.majesty.leaveReason,
	                value: prevState.indicators.majesty.value + 1},
	               satisfaction: {
	                leaveReason: prevState.indicators.satisfaction.leaveReason,
	                value: prevState.indicators.satisfaction.value + 20},
	               satiety: {
	                leaveReason: prevState.indicators.satiety.leaveReason,
	                value: prevState.indicators.satiety.value - 10},
	              })
	            }
	          })
	        }
	      },
	      goToConf: {
	        name: 'Go to a conference',
	        action: () => {
	          this.setState(prevState => {
	            return {
	            	gif: './assets/conference.gif',
	              indicators:Object.assign(this.state.indicators,{
	               money: {
	                leaveReason: prevState.indicators.money.leaveReason,
	                value: prevState.indicators.money.value - 30 | 0},
	               experience: {
	                leaveReason: prevState.indicators.experience.leaveReason,
	                value: prevState.indicators.experience.value + 0.5},
	               productivity: {
	                leaveReason: prevState.indicators.productivity.leaveReason,
	                value: prevState.indicators.productivity.value + 1},
	               majesty: {
	                leaveReason: prevState.indicators.majesty.leaveReason,
	                value: prevState.indicators.majesty.value + 1},
	               satiety: {
	                leaveReason: prevState.indicators.satiety.leaveReason,
	                value: prevState.indicators.satiety.value - 20},
	              })
	            }
	          })
	        }
	        },
	      petProject: {
	        name: 'Work on a pet project',
	        action: () => {
	           this.setState(prevState => {
	            return {
	            	gif: './assets/petProject.gif',
	              indicators:Object.assign(this.state.indicators,{
	               satiety: {
	                leaveReason: prevState.indicators.satiety.leaveReason,
	                value: Math.round(prevState.indicators.satiety.value / 3)},
	               experience: {
	                leaveReason: prevState.indicators.experience.leaveReason,
	                value: prevState.indicators.experience.value + 0.5},
	               majesty: {
	                leaveReason: prevState.indicators.majesty.leaveReason,
	                value: prevState.indicators.majesty.value + 0.25},
	               satisfaction: {
	                leaveReason: prevState.indicators.satisfaction.leaveReason,
	                value: prevState.indicators.satisfaction.value + 15},
	               money: {
	                leaveReason: prevState.indicators.money.leaveReason,
	                value: prevState.indicators.money.value - 25 | 0},
	              })
	            }
	          })
	       }
	      },
	      eat: {
	        name: 'Eat!',
	        action: () => {
	          this.setState(prevState => {
	            return {
	            	gif: './assets/eat.gif',
	              indicators:Object.assign(this.state.indicators,{
	               health: {
	                leaveReason: prevState.indicators.health.leaveReason,
	                value: prevState.indicators.health.value + 30},
	               satiety: {
	                leaveReason: prevState.indicators.satiety.leaveReason,
	                value: prevState.indicators.satiety.value + 30},
	               money: {
	                leaveReason: prevState.indicators.money.leaveReason,
	                value: prevState.indicators.money.value - 50 | 0},
	              })
	            }
	          })
	        }
	      },
	      freelance: {
	        name: 'take a project on freelance',
	        action: () => {
	          this.setState(prevState => {
	            return {
	            	gif: './assets/freelance.gif',
	              indicators:Object.assign(this.state.indicators,{
	               majesty: {
	                leaveReason: prevState.indicators.majesty.leaveReason,
	                value: prevState.indicators.majesty.value - 1},
	               money: {
	                leaveReason: prevState.indicators.money.leaveReason,
	                value: prevState.indicators.money.value + prevState.indicators.salary.value*2 | 0},
	               satisfaction: {
	                leaveReason: prevState.indicators.satisfaction.leaveReason,
	                value: prevState.indicators.satisfaction.value - 25},
	              })
	            }
	          })
	        }
	      },
	      overtime: {
	        name: 'work overtime',
	        action: () => {
	          this.setState(prevState => {
	            return {
	            	gif: './assets/overtime.gif',
	              indicators:Object.assign(this.state.indicators,{
	               experience: {
	                leaveReason: prevState.indicators.experience.leaveReason,
	                value: prevState.indicators.experience.value + 2},
	               majesty: {
	                leaveReason: prevState.indicators.majesty.leaveReason,
	                value: prevState.indicators.majesty.value + 2},
	               salary: {
	                leaveReason: prevState.indicators.salary.leaveReason,
	                value: prevState.indicators.salary.value + 10},
	               satisfaction: {
	                leaveReason: prevState.indicators.satisfaction.leaveReason,
	                value: Math.round(prevState.indicators.satisfaction.value / 2)},
	               satiety: {
	                leaveReason: prevState.indicators.satiety.leaveReason,
	                value: Math.round(prevState.indicators.satiety.value / 2)},
	               money: {
	                leaveReason: prevState.indicators.money.leaveReason,
	                value: prevState.indicators.money.value + prevState.indicators.salary.value*2 | 0},
	               health: {
	                leaveReason: prevState.indicators.health.leaveReason,
	                value: prevState.indicators.health.value - 20},
	              })
	            }
	          })
	        }
	      },
	      coffee: {
	        name: 'Have some coffee',
	        action: () => {
	          this.setState(prevState => {
	            return {
	            	gif: './assets/coffee.gif',
	              indicators:Object.assign(this.state.indicators,{
	               money: {
	                leaveReason: prevState.indicators.money.leaveReason,
	                value: prevState.indicators.money.value - 50 | 0},
	               satisfaction: {
	                leaveReason: prevState.indicators.satisfaction.leaveReason,
	                value: prevState.indicators.satisfaction.value + 60},
	               health: {
	                leaveReason: prevState.indicators.health.leaveReason,
	                value: prevState.indicators.health.value - 10},
	               productivity: {
	                leaveReason: prevState.indicators.productivity.leaveReason,
	                value: prevState.indicators.productivity.value * 2},
	              })
	            }
	          })
	        }
	      }
	  }
	}

  isWorking() {
    var indicators = Object.keys(this.state.indicators)
    for (var i in indicators) {
      if (this.state.indicators[indicators[i]].value <= 0) {
        return this.state.indicators[indicators[i]].leaveReason
      }
    }
  }

  render() {
  	console.log(this.state.gif)
    return (<Grid container alignItems="stretch" className="App">
        <Indicators indicators={this.state.indicators} />
      	<Gif gif={this.state.gif} reason={this.isWorking()} />
      	<Actions actions={this.actions} context={this} state={this.state} />
      </Grid>)
  }
}