import styles from './styles';
import {ActivityIndicator, View} from 'react-native';
import React from 'react';

const Loader = () => {
  return (
    <View style={styles.loaderWrapper}>
      <ActivityIndicator color="#cf392a" style={styles.loader} size="large" />
    </View>
  );
};

export default Loader;
