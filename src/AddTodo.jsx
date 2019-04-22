import React, {useState} from 'react'
import {gql} from 'apollo-boost'
import {Mutation} from 'react-apollo'

const INSERT_TODO = gql`
  mutation InsertTodo($name: String!, $content: String!) {
    insertTodo(name: $name, content: $content) @client
  }
`


const AddTodo = () => {
  const [content, setContent] = useState("");
  const [name, setName] = useState("");
  return (
    <Mutation mutation={INSERT_TODO} variables={{content, name}}>
      {insertTodo => (
        <>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
          <input type="text" value={content} onChange={(e) => setContent(e.target.value)}/>
          <button onClick={insertTodo}>ADD</button>
        </>
      )}
    </Mutation>
  )
}

export default AddTodo
