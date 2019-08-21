import React, {Component} from 'react';
import Session from './Session';
import {Text, View} from 'react-native';
import formatSessionData from '../../lib/helpers/formatSessionData';
import {Query} from '@apollo/react-components';
import {gql} from 'apollo-boost';
import styles from './styles';
import Loader from '../../components/Loader';
import {withNavigation} from 'react-navigation';
import FavesContext from '../../context/FavesContext';

const SPEAKER = gql`
  query Speaker($id: ID!) {
    Speaker(id: $id) {
      id
      bio
      image
      name
      url
    }
  }
`;

class SessionContainer extends Component {
  render() {
    const session = this.props.navigation.getParam('item');
    const speakerId =
      session.speaker && session.speaker.id ? session.speaker.id : undefined;
    return (
      <FavesContext.Consumer>
        {context =>
          speakerId ? (
            <Query query={SPEAKER} variables={{id: speakerId}}>
              {({loading, error, data}) => {
                if (loading) {
                  return <Loader />;
                }
                if (error) {
                  return <Text>{error}</Text>;
                }
                console.log(context);
                return (
                  <Session
                    session={session}
                    addFaveSession={context.addFaveSession}
                    removeFaveSession={context.removeFaveSession}
                    speaker={data.Speaker}
                    add
                  />
                );
              }}
            </Query>
          ) : (
            <Session
              session={session}
              addFaveSession={context.addFaveSession}
              removeFaveSession={context.removeFaveSession}
              add
            />
          )
        }
      </FavesContext.Consumer>
    );
  }
}

export default withNavigation(SessionContainer);
