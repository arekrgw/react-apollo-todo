import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ApolloClient, {InMemoryCache} from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'

import resolvers from './resolvers'
import initialCache from './initialCache'


const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  uri: "https://countries.trevorblades.com/",
  resolvers
});

cache.writeData(initialCache);


ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  , document.getElementById('root')
);

