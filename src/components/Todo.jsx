import React from "react";
import { Mutation } from "react-apollo";
import { COMPLETE_TODO } from "../queries";
import Checkbox from "./Checkbox";
import styled from "styled-components";

const LeftSide = styled.div`
  width: 90%;
  ${({ completed }) => completed && "text-decoration: line-through"}
`;

const RightSide = styled.div`
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StP = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small};
`;

const Todo = React.forwardRef(({ todo }, ref) => {
  return (
    <Mutation mutation={COMPLETE_TODO} variables={{ id: todo.id }}>
      {completeTodo => (
        <li ref={ref}>
          <LeftSide completed={todo.completed}>
            <h3>{todo.name}</h3>
            <StP>{todo.content}</StP>
          </LeftSide>
          <RightSide>
            <Checkbox onChange={completeTodo} checked={todo.completed} />
          </RightSide>
        </li>
      )}
    </Mutation>
  );
});

export default Todo;
