import React, {Component} from 'react';
import Faves from './Faves';
import {Text} from 'react-native';
import {Query} from '@apollo/react-components';
import {gql} from 'apollo-boost';
import styles from './styles';
import Loader from '../../components/Loader';
import {withNavigation} from 'react-navigation';
import FavesContext from '../../context/FavesContext';
import formatSessionData from '../../lib/helpers/formatSessionData';

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

export default class FavesContainer extends Component {
  static navigationOptions = {
    title: 'Faves',
  };
  render() {
    return (
      <FavesContext.Consumer>
        {context => (
          <Query query={ALL_SESSIONS}>
            {({loading, error, data}) => {
              if (loading) {
                return <Loader />;
              }
              if (error) {
                return <Text>{error}</Text>;
              }
              console.log(data);
              const faveSessions = data.allSessions.filter(session =>
                context.faveIds.includes(session.id),
              );
              return <Faves sessions={formatSessionData(faveSessions)} />;
            }}
          </Query>
        )}
      </FavesContext.Consumer>
    );
  }
}
