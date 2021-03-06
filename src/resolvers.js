import { gql } from "apollo-boost";
import _ from "lodash";

export default {
  Mutation: {
    completeTodo(_, variables, { cache, getCacheKey }) {
      const id = getCacheKey({ __typename: "Todo", id: variables.id });
      const fragment = gql`
        fragment completeTodo on Todo {
          completed
        }
      `;
      const todo = cache.readFragment({ fragment, id });
      const data = { ...todo, completed: !todo.completed };
      cache.writeData({ id, data });
      return null;
    },
    editTodo(_, variables, { cache, getCacheKey }) {
      const id = getCacheKey({ __typename: "Todo", id: variables.id });
      const fragment = gql`
        fragment editTodo on Todo {
          name
          content
        }
      `;
      const todo = cache.readFragment({ fragment, id });
      let data = {};
      if (variables.type === "name") data = { ...todo, name: variables.value };
      else data = { ...todo, content: variables.value };

      cache.writeData({ id, data });
    },
    insertTodo(_, variables, { cache }) {
      const GET_TODOS_AND_CURRENT_ID = gql`
        {
          todos @client {
            id
            name
            content
            completed
          }
          currentId @client
        }
      `;
      const prevTodos = cache.readQuery({ query: GET_TODOS_AND_CURRENT_ID });
      const newTodo = {
        ...variables,
        id: prevTodos.currentId,
        completed: false,
        __typename: "Todo"
      };
      const data = {
        todos: [...prevTodos.todos, newTodo],
        currentId: prevTodos.currentId + 1
      };

      cache.writeData({ data });
      return null;
    },
    deleteTodo(_root, variables, { cache }) {
      const query = gql`
        {
          todos @client {
            __typename
            id
            name
            content
            completed
          }
        }
      `;
      const allTodos = cache.readQuery({ query: query });
      const afterRemoving = _.filter(
        allTodos.todos,
        todo => todo.id !== variables.id
      );
      const data = {
        todos: [...afterRemoving]
      };
      cache.writeData({ data });
      return null;
    }
  }
};
