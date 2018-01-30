import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Card from './card/card.js'
import { Button, Row, Navbar, NavItem, Col } from 'react-materialize'

class App extends Component {
    status={
      tasks: [{
        id:'1',
        title: 'Lorem?',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        date: '12/2'
      },
      {
        id:'2',
        title: 'Lorem!',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        date: '14/2'
      }]
    }

    deleteThis = () =>{
      console.log('hi! i should delete but...')
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
              this.status.tasks.map((elem)=>{
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
            <Button floating large className='blue' waves='light' icon='add' s={2} onClick={this.addThis}/>
          </Row>
        </p>
      </div>
    );
  }
}

export default App;
