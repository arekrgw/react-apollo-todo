import React, { Component } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import { Layout } from "../theme";
import Header from "./Header";

import TestAdopt from "./TestAdopt";

class App extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <AddTodo />
        <TodoList />
        <TestAdopt
          todo={{
            id: 1,
            name: "sadas",
            content: "dasdasd",
            completed: false
          }}
        />
      </Layout>
    );
  }
}

export default App;
