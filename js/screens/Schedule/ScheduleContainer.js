import React, {Component} from 'react';
import Schedule from './Schedule';
import {Text, View} from 'react-native';
import {Query} from '@apollo/react-components';
import {gql} from 'apollo-boost';
import formatSessionData from '../../lib/helpers/formatSessionData';
import Loader from '../../components/Loader';
import styles from './styles';
import {withNavigation} from 'react-navigation';
import FavesContext from '../../context/FavesContext';

const ALL_SESSIONS = gql`
  {
    allSessions {
      id
      description
      location
      speaker {
        id
      }
      startTime
      title
    }
  }
`;
class ScheduleContainer extends Component {
  static navigationOptions = {
    title: 'Schedule',
  };
  render() {
    return (
      <FavesContext.Consumer>
        {({faveIds}) => (
          <Query query={ALL_SESSIONS}>
            {({loading, error, data}) => {
              if (loading) {
                return <Loader />;
              }
              if (error) {
                return <Text>{error}</Text>;
              }
              data.allSessions.forEach(session => {
                session.fave = faveIds.includes(session.id);
              });
              return (
                <Schedule
                  navigation={this.props.navigation}
                  sessions={formatSessionData(data.allSessions)}
                />
              );
            }}
          </Query>
        )}
      </FavesContext.Consumer>
    );
  }
}

export default withNavigation(ScheduleContainer);
