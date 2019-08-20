import styles from './styles';
import {ActivityIndicator, View} from 'react-native';
import React from 'react';

const Loader = () => {
  return <ActivityIndicator style={styles.loader} size="large" />;
};

export default Loader;
