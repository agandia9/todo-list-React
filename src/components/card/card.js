import React, { Component } from 'react';
import { Col, Card } from 'react-materialize'
import './card.css'

class App extends Component {

  render() {
    return (
		<Col s={6} m={4} l={2} className='grid-example'>
            <Card className='blue-grey darken-2' textClassName='white-text' title={this.props.title} actions={[<a href='#' id={this.props.id} onClick={this.props.deleteThis}>Delete task</a>]}>
            	<textarea id={this.props.id} onChange={this.props.editThis} value={this.props.description}></textarea>
            </Card>
		</Col>
    );
  }
}

export default App;