import React, { Component } from 'react';
import { Col, Card } from 'react-materialize'

class App extends Component {
  render() {
    return (
		<Col s={2} className='grid-example'>
            <Card className='blue-grey darken-1' textClassName='white-text' title={this.props.title} actions={[<a href='#' onClick={this.props.deleteThis}>Delete task</a>]}>
            	{this.props.description}
            </Card>
		</Col>
    );
  }
}

export default App;