import React, {useState} from 'react'
import {Mutation} from 'react-apollo'
import { INSERT_TODO } from './queries'


const AddTodo = () => {
  const [content, setContent] = useState("");
  const [name, setName] = useState("");
  const checkIfEmpty = insertTodo => {
    if(name && content) insertTodo();
  }
  return (
    <Mutation mutation={INSERT_TODO} variables={{content, name}}>
      {insertTodo => (
        <>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
          <input type="text" value={content} onChange={(e) => setContent(e.target.value)}/>
          <button onClick={() => checkIfEmpty(insertTodo)}>ADD</button>
        </>
      )}
    </Mutation>
  )
}

export default AddTodo
