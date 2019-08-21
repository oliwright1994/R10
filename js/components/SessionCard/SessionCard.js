import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';
import {withNavigation} from 'react-navigation';

const SessionCard = ({item, navigation}) => {
  return (
    <TouchableOpacity
      opacity={0.6}
      onPress={() => {
        navigation.navigate('Session', {item});
      }}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.location}>{item.location}</Text>
    </TouchableOpacity>
  );
};

export default withNavigation(SessionCard);
