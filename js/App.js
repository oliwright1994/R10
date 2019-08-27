import React from 'react';
import client from './config/api';
import {ApolloProvider} from '@apollo/react-hooks';
import RootStackNavigator from './navigation/RootStackNavigator';
import {FavesProvider} from './context/FavesContext';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <FavesProvider>
        <RootStackNavigator />
      </FavesProvider>
    </ApolloProvider>
  );
};

export default App;
