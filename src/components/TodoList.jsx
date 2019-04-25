import React from "react";
import { Query } from "react-apollo";
import { GET_ALL_TODOS } from "../queries";
import styled from "styled-components";
import posed, { PoseGroup } from "react-pose";
// Components
import Todo from "./Todo";

const StyledUl = styled.ul`
  width: 100%;
  background: ${({ theme }) => theme.color.dark};
  list-style-type: none;
  border-radius: 7px;

  > li {
    border-bottom: 1px solid ${({ theme }) => theme.color.lighterdark};
    padding: 15px 7px;
    display: flex;
    margin-top: -50px;
    width: 100%;
    flex-wrap: wrap;
  }
  > li:last-child {
    border: none;
  }
`;

const PosedTodo = posed(Todo)({
  enter: {
    opacity: 1,
    marginTop: 0
  },
  exit: {
    opacity: 0,
    transfrom: "translateX(20px)"
  }
});

const TodoList = () => (
  <StyledUl>
    <Query query={GET_ALL_TODOS}>
      {({ data }) => {
        return (
          <PoseGroup>
            {data.todos.map(todo => (
              <PosedTodo key={todo.id} todo={todo} />
            ))}
          </PoseGroup>
        );
      }}
    </Query>
  </StyledUl>
);

export default TodoList;
