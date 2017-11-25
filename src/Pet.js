// TODO: Add leaving action

// TODO: Add experience earning logic - xp = (majesty * productivity)
// TODO: Add money earning logic - (xp + majesty) * salary

// TODO: Add GIFs for every action
// TODO: Add GIFs for every leave reason

import React from 'react'
import Grid from 'material-ui/Grid'
import { GridList, GridListTile } from 'material-ui/GridList'
import List, { ListItem, ListItemText } from 'material-ui/List'
import LinearProgress from 'material-ui/Progress/LinearProgress'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'

export default class Pet extends React.Component {
  constructor(props) {
    super(props)

    this.shouldRender = true
    this.state = {
      indicators: {
        experience: {
          value: 1,
        },
        majesty: {
          value: 1,
        },
        productivity: {
          value: 1,
          leaveReason: ' impostor syndrome'
        },
        salary: {
          value: 1,
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
        gif: require('./assets/gifs/learn.gif'),
        action: () => {
          this.setState(prevState => {
            return {
             indicators:Object.assign(this.state.indicators,{
               experience: {value: prevState.indicators.experience.value + 0.5},
               majesty: {value: prevState.indicators.majesty.value + 1},
               satisfaction: {value: prevState.indicators.satisfaction.value + 20},
               satiety: {value: prevState.indicators.satiety.value - 10},
              })
            }
          })
        }
      },
      goToConf: {
        name: 'Go to a conference',
        gif: require('./assets/gifs/conference.gif'),
        action: () => {
          this.setState(prevState => {
            return {
              indicators:Object.assign(this.state.indicators,{
               money: {value: prevState.indicators.money.value - 30},
               experience: {value: prevState.indicators.experience.value + 0.5},
               productivity: {value: prevState.indicators.productivity.value + 1},
               majesty: {value: prevState.indicators.majesty.value + 1},
               satiety: {value: prevState.indicators.satiety.value - 20},
              })
            }
          })
        }
        },
      petProject: {
        name: 'Work on a pet project',
        gif: require('./assets/gifs/petProject.gif'),
        action: () => {
           this.setState(prevState => {
            return {
              indicators:Object.assign(this.state.indicators,{
               satiety: {value: Math.round(prevState.indicators.satiety.value / 2)},
               experience: {value: prevState.indicators.experience.value + 0.5},
               majesty: {value: prevState.indicators.majesty.value + 0.25},
               satisfaction: {value: prevState.indicators.satisfaction.value + 15},
              })
            }
          })
       }
      },
      eat: {
        name: 'Eat!',
        gif: require('./assets/gifs/eat.gif'),
        action: () => {
          this.setState(prevState => {
            return {
              indicators:Object.assign(this.state.indicators,{
               health: {value: prevState.indicators.health.value + 30},
               satiety: {value: prevState.indicators.satiety.value + 30},
               money: {value: prevState.indicators.money.value - 50},
              })
            }
          })
        }
      },
      freelance: {
        name: 'take a project on freelance',
        gif: require('./assets/gifs/freelance.gif'),
        action: () => {
          this.setState(prevState => {
            return {
              indicators:Object.assign(this.state.indicators,{
               majesty: {value: prevState.indicators.majesty.value - 1},
               money: {value: prevState.indicators.money.value + prevState.indicators.salary.value*2},
               satisfaction: {value: prevState.indicators.satisfaction.value - 25},
              })
            }
          })
        }
      },
      overtime: {
        name: 'work overtime',
        gif: require('./assets/gifs/overtime.gif'),
        action: () => {
          this.setState(prevState => {
            return {
              indicators:Object.assign(this.state.indicators,{
               experience: {value: prevState.indicators.experience.value + 2},
               majesty: {value: prevState.indicators.majesty.value + 2},
               salary: {value: prevState.indicators.salary.value + 10},
               satisfaction: {value: Math.round(prevState.indicators.satisfaction.value / 2)},
               satiety: {value: Math.round(prevState.indicators.satiety.value / 2)},
               money: {value: prevState.indicators.money.value + prevState.indicators.salary.value*2},
               health: {value: prevState.indicators.health.value - 20},
              })
            }
          })
        }
      },
      coffee: {
        name: 'Have some coffee',
        gif: require('./assets/gifs/coffee.gif'),
        action: () => {
          this.setState(prevState => {
            return {
              indicators:Object.assign(this.state.indicators,{
               money: {value: prevState.indicators.money.value / 2},
               satisfaction: {value: prevState.indicators.satisfaction.value + 60},
               health: {value: prevState.indicators.health.value - 10},
               productivity: {value: prevState.indicators.productivity.value * 2},

              })
            }
          })

        }
      },
      leave: {
        name: 'You left programming because of',
        // gif: require('./assets/gifs/leave.gif'),
        action: reason => `${this.name} ${reason}`
      }
    }

  }


  renderData() {
    return (<Grid xs={12} md={6} lg={4} item={true} id="indicators">
          <Typography type={'display2'} color="primary" paragraph={true}>
            Indicators
          </Typography>
          <List>
            {Object.keys(this.state.indicators).map((indicator, index) => (
              <ListItem key={index} className={this.state.indicators[indicator].value < 25 ? 'danger' : 'ok'}>
                <Typography type={'display1'} color="default" paragraph={true}>
                  {indicator} {this.state.indicators[indicator].value}
                  {index <= 4 ? null
                   : <LinearProgress mode="determinate" value={this.state.indicators[indicator].value} />}
                </Typography>
              </ListItem>
              ))}
          </List>
        </Grid>)
  }

  getLevelImage() {
    if (this.state.indicators.experience.value < 3) {
      return 'junior.png'
    } else if (this.state.indicators.experience.value < 10) {
      return 'middle.png'
    } else return 'senior.jpg'
  }

  renderUser() {
    return (<Grid xs={12} md={6} lg={4} item={true} id="actions">
          <Typography type={'display3'} color="primary" align="center" paragraph={true}>
            You
          </Typography>
            <img style={{width: '100%'}} src={this.state.actionGif || require(`./assets/${this.getLevelImage()}`)} />

        </Grid>)
  }

  doAction(action) {
    // console.log(this.state)
    action.action()
    this.setState(prevState => Object.assign(prevState, {
      actionGif: action.gif
    }))

  }

  renderActions() {
    var actions = this.actions
    return (<Grid xs={12} md={6} lg={4} item={true} id="actions">
          <Typography type={'display2'} color="primary" paragraph={true}>
            Actions
          </Typography>
          <List>
            {Object.keys(actions).slice(0,-1).map((action, index) => (
              <ListItem key={index}>
               <Button raised color="primary"
                onClick={this.doAction.bind(this,actions[action])}>
                {actions[action].name}
               </Button>
              </ListItem>
              ))}
          </List>
        </Grid>)
  }

  render() {
    return (
      <div id="Pet" style={{padding: 20}}>
      <Grid container alignItems={'stretch'}>
        {this.renderData()}
        {this.renderUser()}
        {this.renderActions()}
      </Grid>
      </div>
    )
  }
}