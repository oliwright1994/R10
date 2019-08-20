import React, {Component} from 'react';
import About from './About';
import {Query} from '@apollo/react-components';
import {gql} from 'apollo-boost';
import {Text, View} from 'react-native';
import Loader from '../../components/Loader';
import styles from './styles';

export default class AboutContainer extends Component {
  render() {
    return (
      <Query
        query={gql`
          {
            allConducts {
              id
              description
              title
            }
          }
        `}>
        {({loading, error, data}) => {
          if (loading) {
            return (
              <View style={styles.loaderWrapper}>
                <Loader />
              </View>
            );
          }
          if (error) {
            return <Text>{error}</Text>;
          }
          return <About allConducts={data.allConducts} />;
        }}
      </Query>
    );
  }
}
