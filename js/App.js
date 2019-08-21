import React, {Fragment} from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import client from './config/api';
import {ApolloProvider} from '@apollo/react-hooks';
import RootStackNavigator from './navigation/RootStackNavigator';
import BottomTabNavigation from './navigation/NavigationLayout';
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
