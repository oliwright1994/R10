import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import AboutScreen from '../screens/About';
import BottomTabNavigator from './NavigationLayout';
import SpeakerModal from '../screens/Speaker';

export default createAppContainer(
  createStackNavigator(
    {Layout: BottomTabNavigator, Speaker: SpeakerModal},
    {
      mode: 'modal',
      headerMode: 'none',
    },
  ),
);
