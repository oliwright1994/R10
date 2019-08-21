import React, {Component} from 'react';
import Maps from './Map';
import {Text} from 'react-native';

export default class MapsContainer extends Component {
  static navigationOptions = {
    title: 'Map',
  };
  render() {
    return <Maps />;
  }
}
