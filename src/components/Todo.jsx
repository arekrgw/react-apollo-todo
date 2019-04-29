import React, { useState, Fragment, memo } from "react";
import { Mutation } from "react-apollo";
import { COMPLETE_TODO, DELETE_TODO } from "../queries";
import Checkbox from "./Checkbox";
import XSign from "./XSign";
import styled from "styled-components";
import { adopt } from "react-adopt";
import EditTodo from "./EditTodo";

const LeftSide = styled.div`
  width: 80%;
  ${({ completed }) => completed && "text-decoration: line-through"}
  ${({ theme }) => theme.media.sm} {
    width: 85%;
  }
`;

const RightSide = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-around
  align-items: center;
  ${({ theme }) => theme.media.sm} {
    width: 15%
  }
`;

const StP = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small};
  word-break: break-word;
`;

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

const Todo = memo(({ todo }) => {
  const [isEditOpen, setEditOpen] = useState(false);
  const [configuration, setConfiguration] = useState({});
  const handleOpenEdit = (e, contentType) => {
    setEditOpen(true);
    const editConfiguration = {
      x: Math.floor(e.target.getBoundingClientRect().x),
      y: Math.floor(e.target.getBoundingClientRect().y),
      width: e.target.getBoundingClientRect().width,
      height: e.target.getBoundingClientRect().height,
      type: contentType,
      value: e.target.innerHTML,
      id: todo.id
    };
    setConfiguration(editConfiguration);
  };

  return (
    <Fragment>
      {isEditOpen && (
        <EditTodo closeEdit={() => setEditOpen(false)} config={configuration} />
      )}
      <Mutating id={todo.id}>
        {({ completeTodo, deleteTodo }) => (
          <li>
            <LeftSide completed={todo.completed}>
              <h3 onClick={e => handleOpenEdit(e, "name")}>{todo.name}</h3>
              <StP onClick={e => handleOpenEdit(e, "content")}>
                {todo.content}
              </StP>
            </LeftSide>
            <RightSide>
              <Checkbox complete={completeTodo} checked={todo.completed} />
              <XSign onClick={deleteTodo} />
            </RightSide>
          </li>
        )}
      </Mutating>
    </Fragment>
  );
});

export default Todo;
