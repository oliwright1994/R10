import React, {Component} from 'react';
import Schedule from './Schedule';
import {Text, View} from 'react-native';
import {Query} from '@apollo/react-components';
import {gql} from 'apollo-boost';
import formatSessionData from '../../lib/helpers/formatSessionData';
import Loader from '../../components/Loader';
import styles from './styles';

const ALL_SESSIONS = gql`
  {
    allSessions {
      id
      description
      location
      speaker {
        id
        url
      }
      startTime
      title
    }
  }
`;
export default class ScheduleContainer extends Component {
  static navigationOptions = {
    title: 'Schedule',
  };
  render() {
    return (
      <Query query={ALL_SESSIONS}>
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
          return <Schedule sessions={formatSessionData(data.allSessions)} />;
        }}
      </Query>
    );
  }
}
