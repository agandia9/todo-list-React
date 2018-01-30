import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';

import Card from './card/card.js'
import { Button, Row, Navbar, NavItem, Col, Modal } from 'react-materialize'

class App extends Component {
  constructor(props){
    super()
    this.state={
      tasks: [{
        id:'1',
        title: 'Lorem?',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        date: '12/2'
      },
      {
        id:'2',
        title: 'Lorem!',
        description: 'Maiores fugit veniam, dolore assumenda adipisicing elit.',
        date: '14/2'
      }]
    }
  }

    deleteThis = (e) =>{
      let id = e.target.id
      console.log(id)
      this.setState({
        tasks: this.state.tasks.filter(task =>{
          console.log(task.id !== id)
           return task.id !== id
         })
    })
    }

    addThis = () =>{
      console.log('hi! i should add but...')
    }


  render() {
    return (
      <div className="App">
        <Navbar brand='logo' left>
          <NavItem href='get-started.html'>
            <img href={logo} />
            </NavItem>
          </Navbar>
          <p className="App-intro">
          <h2>Add new todo's</h2>
           <Row>
              {
                this.state.tasks.map((elem)=>{
                  return(
                    <Card 
                        id={elem.id}
                        title={elem.title}
                        description={elem.description}
                        deleteThis={this.deleteThis}
                    />
                    )
                })
              }
            <Button floating large className='blue' waves='light' icon='add' s={2} />
            </Row>
          </p>
      </div>
    );
  }
}

export default App;
