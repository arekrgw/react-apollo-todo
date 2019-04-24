import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'styled-components';
import { themeSchema, GlobalStyle } from './theme';

import resolvers from './resolvers';
import initialCache from './initialCache';

const cache = new InMemoryCache();
const client = new ApolloClient({
	cache,
	resolvers
});

cache.writeData(initialCache);

ReactDOM.render(
	<ApolloProvider client={client}>
		<ThemeProvider theme={themeSchema}>
			<React.Fragment>
				<GlobalStyle />
				<App />
			</React.Fragment>
		</ThemeProvider>
	</ApolloProvider>,
	document.getElementById('root')
);
