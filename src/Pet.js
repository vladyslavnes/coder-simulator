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
        action: () => {
          this.setState(prevState => {
            return {
              indicators:Object.assign(this.state.indicators,{
               money: {value: prevState.indicators.money.value - 30},
               experience: {value: prevState.indicators.experience.value + 0.5},
               productivity: {value: prevState.indicators.productivity.value + 1},
               majesty: {value: prevState.indicators.majesty.value + 1},
               satisfaction: {value: prevState.indicators.satisfaction.value + 25},
               satiety: {value: prevState.indicators.satiety.value - 20},
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
              indicators:Object.assign(this.state.indicators,{
               experience: {value: prevState.indicators.experience.value + 0.5},
               majesty: {value: prevState.indicators.majesty.value + 0.25},
               satisfaction: {value: prevState.indicators.satisfaction.value + 15},
              })
            }
          })
       }
      },
      gym: {
        name: 'Go to gym',
        action: () => {
          this.setState(prevState => {
            return {
              indicators:Object.assign(this.state.indicators,{
               satiety: {value: prevState.indicators.satiety.value - 20},
               productivity: {value: Math.round(prevState.indicators.productivity.value / 1.45)},
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
              indicators:Object.assign(this.state.indicators,{
               satiety: {value: prevState.indicators.satiety.value + 20},
               money: {value: prevState.indicators.money.value - 50},
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
              indicators:Object.assign(this.state.indicators,{
               majesty: {value: prevState.indicators.majesty.value - 1},
               money: {value: prevState.indicators.money.value + 100},
               satisfaction: {value: prevState.indicators.satisfaction.value - 25},
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
              indicators:Object.assign(this.state.indicators,{
               experience: {value: prevState.indicators.experience.value + 2},
               majesty: {value: prevState.indicators.majesty.value + 2},
               salary: {value: prevState.indicators.salary.value + 1},
               satisfaction: {value: Math.round(prevState.indicators.satisfaction.value / 2)},
               satiety: {value: Math.round(prevState.indicators.satiety.value / 2)},

              })
            }
          })

        }
      },
      leave: {
        name: 'You left programming because of',
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
                  {index < 4 ? null
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
            <img style={{width: '100%'}} src={require(`./assets/${this.getLevelImage()}`)} />

        </Grid>)
  }

  renderActions() {
    return (<Grid xs={12} md={6} lg={4} item={true} id="actions">
          <Typography type={'display2'} color="primary" paragraph={true}>
            Actions
          </Typography>
          <List>
            {Object.keys(this.actions).slice(0,-1).map((action, index) => (
              <ListItem key={index}>
               <Button raised color="primary" onClick={this.actions[action].action}>
                {this.actions[action].name}
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