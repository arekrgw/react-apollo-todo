import React from 'react'
import {gql} from 'apollo-boost'
import {Mutation} from 'react-apollo'


const COMPLETE_TODO = gql`
  mutation CompleteTodo($id: Int!) {
    completeTodo(id: $id) @client
  }
`

const Todo = ({todo}) => (    
      <Mutation mutation={COMPLETE_TODO} variables={{ id: todo.id}}>
        {completeTodo => (
          <div>
            <h3>{todo.name}</h3>
            <p onClick={completeTodo}>{todo.content}</p>
            {todo.completed ? "TRUE" : "FALSE"}
            <input type="checkbox" onChange={completeTodo} checked={todo.completed} />
          </div>
        )}
      </Mutation>
)

export default Todo
