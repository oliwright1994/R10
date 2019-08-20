import React, {Component} from 'react';
import Faves from './Faves';
import {Text} from 'react-native';

export default class FavesContainer extends Component {
  static navigationOptions = {
    title: 'Faves',
  };
  render() {
    return <Text>Faves</Text>;
  }
}
