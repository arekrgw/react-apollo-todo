import React from 'react'
import { Query } from 'react-apollo'
import { GET_ALL_TODOS } from './queries'

// Components
import Todo from './Todo'


const TodoList = () => (
  <ul>
    <Query query={GET_ALL_TODOS}>
      {({data}) => {
        return data.todos.map(todo => <Todo key={todo.id} todo={todo} />)
      }}
    </Query>
  </ul>
)

export default TodoList
