import React from 'react'
import {Mutation} from 'react-apollo'
import { COMPLETE_TODO } from './queries' 



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
