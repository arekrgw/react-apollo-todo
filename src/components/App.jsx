import React, { Component } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import { Layout } from "../theme";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <AddTodo />
        <TodoList />
      </Layout>
    );
  }
}

export default App;
