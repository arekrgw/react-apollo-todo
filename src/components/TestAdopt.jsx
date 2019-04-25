import { Mutation } from "react-apollo";
import { COMPLETE_TODO, DELETE_TODO } from "../queries";
import { adopt } from "react-adopt";
import React from "react";

const Mutating = adopt({
  completeTodo: ({ id, render }) => (
    <Mutation mutation={COMPLETE_TODO} variables={{ id: id }}>
      {render}
    </Mutation>
  ),
  deleteTodo: ({ id, render }) => (
    <Mutation mutation={DELETE_TODO} variables={{ id: id }}>
      {render}
    </Mutation>
  )
});

const Test = ({ todo }) => {
  // return (
  //   <Mutation mutation={COMPLETE_TODO} variables={{ id: todo.id }}>
  //     {completeTodo => (
  //       <li>
  //         <h3>{todo.name}</h3>
  //         <p>{todo.content}</p>
  //         <Checkbox onChange={completeTodo} checked={todo.completed} />
  //       </li>
  //     )}
  //   </Mutation>
  // );
  return (
    <Mutating id={todo.id}>
      {({ completeTodo, deleteTodo }) => (
        <button onClick={completeTodo}>COMPLETE</button>
      )}
    </Mutating>
  );
};

export default Test;
