import React, { Component } from 'react';
import './App.css';
import Input from './Input';
import Task from './Task';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: []
    }  
  }
  handleDelete(key) {
    var newTodoList = this.state.todoList;
    var taskIndex = newTodoList.map((task) => task.props.index).indexOf(key);
    newTodoList.splice(taskIndex, 1);
    this.setState({
      todoList: newTodoList
    });
  }
  handleFormSubmit(title) {
    var newTodoList = this.state.todoList;
    var numberOfItems = newTodoList.length;
    var newTodoItem = <Task title={title} key={numberOfItems} index={numberOfItems} deleteHandler={this.handleDelete.bind(this)}/>
    newTodoList.push(newTodoItem);
    this.setState({
      todoList: newTodoList
    });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>react todo</h2>
        </div>
        <Input placeholder="Enter your task" handleFormSubmit={this.handleFormSubmit.bind(this)}/>
        {this.state.todoList}
      </div>
    );
  }
}

export default App;
