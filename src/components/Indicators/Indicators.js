import React from 'react'
import Grid from 'material-ui/Grid'
import List, { ListItem } from 'material-ui/List'
import Typography from 'material-ui/Typography'

import IndicatorItem from './IndicatorItem.js'

export default class Indicators extends React.Component {
  render() {
    return (<Grid xs={12} md={6} lg={4} item={true} id="indicators">
        <Typography type={'display2'} color="primary" paragraph={true}>
          Indicators
        </Typography>
        <List>
          {Object.keys(this.props.indicators).map((indicator, index) => (
            <ListItem key={index}>
              <IndicatorItem index={index} indicator={indicator} value={this.props.indicators[indicator].value} />
            </ListItem>
            ))}
        </List>
      </Grid>
    )
  }

}