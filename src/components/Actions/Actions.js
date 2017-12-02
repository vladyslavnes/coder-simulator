import React from 'react'
import Grid from 'material-ui/Grid'
import List, { ListItem } from 'material-ui/List'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'

export default class Actions extends React.Component {
  render() {
    return (<Grid xs={12} md={6} lg={4} item={true} id="actions">
          <Typography type={'display2'} color="primary" paragraph={true}>
            Actions
          </Typography>
          <List>
            {Object.keys(this.props.actions).map((action, index) => (
              <ListItem key={index}>
                <Button raised color="primary"
                 onClick={this.props.actions[action].action}>
                  {this.props.actions[action].name}
                </Button>
              </ListItem>
              ))}
          </List>
        </Grid>)
  }
}