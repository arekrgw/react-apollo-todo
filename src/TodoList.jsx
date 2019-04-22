import React from 'react'
import { Query } from 'react-apollo'
import {gql} from 'apollo-boost'

// Components
import Todo from './Todo'

const GET_ALL_TODOS = gql`
  {
    todos @client(always: true) {
      id
      name
      content
      completed
    }
  }
`

const TodoList = () => (
  <Query query={GET_ALL_TODOS}>
    {({data}) => {
      return data.todos.map((todo, index) => <Todo key={todo.id} todo={todo} />)
    }}
  </Query>
)

export default TodoList
