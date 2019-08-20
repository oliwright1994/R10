import React, {Fragment} from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import client from './config/api';
import {ApolloProvider} from '@apollo/react-hooks';
import AboutContainer from './screens/About';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <SafeAreaView>
        <AboutContainer />
      </SafeAreaView>
    </ApolloProvider>
  );
};

export default App;
