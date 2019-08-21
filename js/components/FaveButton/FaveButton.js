import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import styles from './styles';

const FaveButton = ({text, onPress}) => {
  return (
    <TouchableOpacity opacity={0.8} style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default FaveButton;
