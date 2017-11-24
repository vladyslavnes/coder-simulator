import React from 'react'
import Grid from 'material-ui/Grid'
import { GridList, GridListTile } from 'material-ui/GridList'
import List, { ListItem, ListItemText } from 'material-ui/List';
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'

export default class Pet extends React.Component {
  constructor(props) {
    super(props)

    this.state = this.props.sharedState.indicators
  }

  renderData() {
    return (<Grid xs={12} md={6} lg={4} item={true} id="indicators">
          <Typography type={'display2'} color="primary" paragraph={true}>
            Indicators
          </Typography>
          <List>
            {Object.keys(this.state).map((indicator, index) => (
              <ListItem key={index} className={this.state[indicator].value < 5 ? 'danger' : 'ok'}>
                <Typography type={'display1'} color="default" paragraph={true}>
                  {indicator}: {this.state[indicator].value}
                </Typography>
              </ListItem>
              ))}
          </List>
        </Grid>)
  }

  getLevelImage() {
    if (this.state.experience.value < 3) {
      return 'junior.png'
    } else if (this.state.experience.value < 10) {
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
            {Object.keys(this.props.actions).slice(0,-1).map((action, index) => (
              <ListItem key={index}>
               <Button raised color="primary" onClick={this.props.actions[action].action}>
                {this.props.actions[action].name}
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