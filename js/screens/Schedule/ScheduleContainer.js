import React, {Component} from 'react';
import Schedule from './Schedule';
import {Text} from 'react-native';

export default class ScheduleContainer extends Component {
  static navigationOptions = {
    title: 'Schedule',
  };
  render() {
    return <Text>Schedule</Text>;
  }
}
