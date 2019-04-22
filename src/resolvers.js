import { gql } from 'apollo-boost'


export default {
  Mutation: {
    completeTodo(_, variables, {cache, getCacheKey}) {
      const id = getCacheKey({ __typename: "Todo", id: variables.id});
      const fragment = gql`
        fragment completeTodo on Todo {
          completed
        }
      `;
      const todo = cache.readFragment({fragment, id});
      const data = {...todo, completed: !todo.completed};
      cache.writeData({id, data});
      return null;
    },
    insertTodo(_, variables, {cache}) {
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
      const prevTodos = cache.readQuery({query: GET_TODOS_AND_CURRENT_ID});
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

      cache.writeData({data});
      return null;
    }
  }
}