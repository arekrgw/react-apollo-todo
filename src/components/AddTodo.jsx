import React, { useState } from "react";
import { Mutation } from "react-apollo";
import { INSERT_TODO } from "../queries";
import TodoInput from "./TodoInput";
import Button from "./Button";

const AddTodo = () => {
  const [content, setContent] = useState("");
  const [name, setName] = useState("");
  const checkIfEmpty = insertTodo => {
    if (name && content) insertTodo();
  };
  const enterDown = (e, insertTodo) =>
    e.key === "Enter" && checkIfEmpty(insertTodo);
  return (
    <Mutation mutation={INSERT_TODO} variables={{ content, name }}>
      {insertTodo => (
        <React.Fragment>
          <TodoInput
            value={name}
            placeholder="Title of a Todo"
            updateVal={val => setName(val)}
            enterPress={e => enterDown(e, insertTodo)}
          />
          <TodoInput
            enterPress={e => enterDown(e, insertTodo)}
            value={content}
            placeholder="What should you do?"
            updateVal={val => setContent(val)}
          />
          <Button addTodo={() => checkIfEmpty(insertTodo)}>Add Todo</Button>
        </React.Fragment>
      )}
    </Mutation>
  );
};

export default AddTodo;
