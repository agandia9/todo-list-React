import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';

import Card from './card/card.js'
import { Button, Row, Navbar, NavItem, Col, Modal, Icon, Input } from 'react-materialize'

class App extends Component {
  constructor(props){
    super()
    this.state={
      tasks: [{
        id:1,
        title: 'Lorem?',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        date: '12/2'
      },
      {
        id:2,
        title: 'Lorem!',
        description: 'Maiores fugit veniam, dolore assumenda adipisicing elit.',
        date: '14/2'
      }],
      newTaskTitle:'',
      newTaskDescription:''
    }
  }

    setTitle = (e) => {
      this.setState({
        newTaskTitle: e.target.value
      })
    }

    setDescription = (e) => {
      this.setState({
        newTaskDescription: e.target.value
      })
    }


    deleteThis = (e) =>{
      let id = e.target.id
      console.log(id)
      this.setState({
        tasks: this.state.tasks.filter(task =>{
          console.log(task.id != id)
           return task.id != id
         })
      })
    }

    addThis = (e) =>{
     
      var newTask = {
        id: this.state.tasks[this.state.tasks.length-1].id+1 && 0,
        title: this.state.newTaskTitle,
        description: this.state.newTaskDescription
      }
      this.state.tasks.push(newTask)
      //this.state.tasks.push(newTask))
      this.setState({
        tasks: this.state.tasks
      })
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
                  console.log(this.state.tasks)
                }
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
              </Row>
              <Row>
              <Modal
                header='Add Task'
                s={12}
                actions={<Button onClick={this.addThis}> Add Task </Button> }
                trigger={<Button floating large className='blue' waves='light' icon='add' s={2} />}>
                  <Row>
                    <Input s={12} placeholder='Write a description title' onChange={this.setTitle}><Icon>title</Icon></Input>
                    <Input s={12} placeholder='Write a description about task' onChange={this.setDescription}><Icon>text_format</Icon></Input>
                  </Row>
              </Modal>
              </Row>
           {/*  />*/}
            
          </p>
      </div>
    );
  }
}

export default App;
