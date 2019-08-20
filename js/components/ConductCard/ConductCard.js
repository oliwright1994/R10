import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const ConductCard = ({conduct}) => {
  return (
    <View>
      <Text style={styles.heading}> + {conduct.title}</Text>
      <Text style={styles.bodyText}>{conduct.description}</Text>
    </View>
  );
};

export default ConductCard;
