import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ApolloClient, {InMemoryCache, gql} from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'

let idCount = 3

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  uri: "https://countries.trevorblades.com/",
  resolvers: {
    Mutation: {
      completeTodo(_, variables, {cache, getCacheKey}) {
        console.log(variables.id)
        const id = getCacheKey({ __typename: "Todo", id: variables.id});
        const fragment = gql`
          fragment completeTodo on Todo {
            completed
          }
        `;
        const todo = cache.readFragment({fragment, id});
        const data = {...todo, completed: !todo.completed};
        console.log(data, id)
        cache.writeData({id, data});
        return null
      },
      insertTodo(_, variables, {cache}) {
        const GET_TODOS = gql` 
            query GetTodos {
              todos @client {
                id
                name
                content
                completed
              }
            }       
        `
        const prevTodos = cache.readQuery({query: GET_TODOS});
        const newTodo = {
          ...variables,
          id: idCount++,
          completed: false,
          __typename: "Todo"
        }
        const data = {
          todos: [...prevTodos.todos, newTodo]
        }

        cache.writeData({data})
        return null;
      }
    }
  }
});

cache.writeData({
  data: {
    todos: [
      {
        __typename: "Todo",
        id: 1,
        name: 'test',
        content: "First test todo stored in Apollo cache",
        completed: false
      },
      {
        __typename: "Todo",
        id: 2,
        name: 'wash',
        content: 'Wash my Mercedes and then polish it',
        completed: true
      }
    ]
  }
});


ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  , document.getElementById('root')
);

