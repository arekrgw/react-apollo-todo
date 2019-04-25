import { gql } from "apollo-boost";

export const GET_ALL_TODOS = gql`
  {
    todos @client(always: true) {
      id
      name
      content
      completed
    }
  }
`;

export const COMPLETE_TODO = gql`
  mutation CompleteTodo($id: Int!) {
    completeTodo(id: $id) @client
  }
`;

export const INSERT_TODO = gql`
  mutation InsertTodo($name: String!, $content: String!) {
    insertTodo(name: $name, content: $content) @client
  }
`;

export const DELETE_TODO = gql`
  mutation DeleteTodo($id: Int!) {
    deleteTodo(id: $id) @client
  }
`;
