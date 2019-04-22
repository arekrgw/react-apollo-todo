import React, { Component } from 'react';
import AddTodo from './AddTodo'
import TodoList from './TodoList'

class App extends Component {
  render() {
    return (
      <>
        <AddTodo />
        <TodoList />
      </>
    );
  }
}

export default App;
