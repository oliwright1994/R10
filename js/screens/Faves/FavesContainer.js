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
        {({faveIds}) => (
          <Query query={ALL_SESSIONS}>
            {({loading, error, data}) => {
              if (loading) {
                return <Loader />;
              }
              if (error) {
                return <Text>{error}</Text>;
              }
              const favedSessions = data.allSessions.filter(session =>
                faveIds.includes(session.id),
              );
              return (
                <Faves
                  sessions={formatSessionData(favedSessions)}
                  faveIds={faveIds}
                />
              );
            }}
          </Query>
        )}
      </FavesContext.Consumer>
    );
  }
}
