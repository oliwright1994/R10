import React, {Fragment} from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import client from './config/api';
import {ApolloProvider} from '@apollo/react-hooks';
import RootStackNavigator from './navigation/RootStackNavigator';
import BottomTabNavigation from './navigation/NavigationLayout';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <RootStackNavigator />
    </ApolloProvider>
  );
};

export default App;
