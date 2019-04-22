import React, { Component } from 'react';
import CountriesList from './CountriesList'
import AddTodo from './AddTodo'
import TodoList from './TodoList'

class App extends Component {
  render() {
    return (
      <>
        <p>Test</p>
        <AddTodo />
        {/* <CountriesList/> */}
        <TodoList />
      </>
    );
  }
}

export default App;
