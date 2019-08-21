import React, {Component} from 'react';
import Session from './Session';
import {Text, View} from 'react-native';
import formatSessionData from '../../lib/helpers/formatSessionData';
import {Query} from '@apollo/react-components';
import {gql} from 'apollo-boost';
import styles from './styles';
import Loader from '../../components/Loader';
import {withNavigation} from 'react-navigation';

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
    const speakerId = session.speaker.id;
    return (
      <Query query={SPEAKER} variables={{id: speakerId}}>
        {({loading, error, data}) => {
          if (loading) {
            return <Loader />;
          }
          if (error) {
            return <Text>{error}</Text>;
          }
          return <Session session={session} speaker={data.Speaker} />;
        }}
      </Query>
    );
  }
}

export default withNavigation(SessionContainer);
