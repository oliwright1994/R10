import React, {Component} from 'react';
import About from './About';
import {Query} from '@apollo/react-components';
import {gql} from 'apollo-boost';
import {Text, View} from 'react-native';
import Loader from '../../components/Loader';
import styles from './styles';

const ALL_CONDUCTS = gql`
  {
    allConducts {
      id
      description
      title
    }
  }
`;

export default class AboutContainer extends Component {
  static navigationOptions = {
    title: 'About',
  };
  render() {
    return (
      <Query query={ALL_CONDUCTS}>
        {({loading, error, data}) => {
          if (loading) {
            return <Loader />;
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
