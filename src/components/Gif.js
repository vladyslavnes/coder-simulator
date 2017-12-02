import React from 'react'
import Typography from 'material-ui/Typography'

export default class Indicators extends React.Component {
  render() {
    return (<div className="Gif" style={{width: '33%'}}>
        <Typography type="display2" color="primary" align="center">
          You
        </Typography>
        
            <img alt="" style={{width: '100%',border: '1px solid #000'}} src={require(`${this.props.gif}`)} />

        
      </div>)
  }
}