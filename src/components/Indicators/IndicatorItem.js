import React from 'react'
import Typography from 'material-ui/Typography'
import LinearProgress from 'material-ui/Progress/LinearProgress'

export default class Pet extends React.Component {
  render() {
    return (<div>
    	<Typography className={this.props.value < 25 ? 'danger' : 'ok'} type={'display1'} color="default" paragraph={true}>
        	{this.props.indicator}: {this.props.value}
      	</Typography>
      	{this.props.index <= 4 ? null
         : <LinearProgress mode="determinate" value={this.props.value} />}
      </div>)
  }
}