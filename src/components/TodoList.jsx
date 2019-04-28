import React from "react";
import { Query } from "react-apollo";
import { GET_ALL_TODOS } from "../queries";
import styled from "styled-components";
// Components
import Todo from "./Todo";
import NoTodosYet from "./NoTodosYet";

const StyledUl = styled.ul`
  width: 100%;
  background: ${({ theme }) => theme.color.dark};
  list-style-type: none;
  border-radius: 7px;

  > li {
    border-bottom: 1px solid ${({ theme }) => theme.color.lighterdark};
    padding: 15px 7px;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
  }
  > li:last-child {
    border: none;
  }
`;

const TodoList = () => (
  <StyledUl>
    <Query query={GET_ALL_TODOS}>
      {({ data }) => {
        if (data.todos.length === 0) return <NoTodosYet />;
        return data.todos.map(todo => <Todo key={todo.id} todo={todo} />);
      }}
    </Query>
  </StyledUl>
);

export default TodoList;
