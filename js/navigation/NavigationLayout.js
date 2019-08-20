import React from 'react';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import AboutScreen from '../screens/About';
import MapScreen from '../screens/Map';
import ScheduleScreen from '../screens/Schedule';
import FavesScreen from '../screens/Faves';
import SessionScreen from '../screens/Session';
import SpeakerScreen from '../screens/Speaker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {sharedNavigationOptions} from './config';

const AboutStack = createStackNavigator(
  {
    About: {screen: AboutScreen},
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
    }),
  },
);
const ScheduleStack = createStackNavigator(
  {
    Schedule: {screen: ScheduleScreen},
    Session: {screen: SessionScreen},
    Speaker: {screen: SpeakerScreen},
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
    }),
  },
);
const MapStack = createStackNavigator(
  {
    Map: {screen: MapScreen},
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
    }),
  },
);
const FavesStack = createStackNavigator(
  {
    Faves: {screen: FavesScreen},
    Session: {screen: SessionScreen},
    Speaker: {screen: SpeakerScreen},
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
    }),
  },
);
const SessionStack = createStackNavigator({
  Session: {screen: SessionScreen},
});
// Dedicated stacks for Schedule and Faves will go here too!
export default createBottomTabNavigator(
  {
    Schedule: ScheduleStack,
    Map: MapStack,
    Faves: FavesStack,
    About: AboutStack,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        switch (routeName) {
          case 'About':
            iconName = 'ios-information-circle';
            break;
          case 'Schedule':
            iconName = 'ios-calendar';
            break;
          case 'Map':
            iconName = 'ios-map';
            break;
          case 'Faves':
            iconName = 'md-heart';
            break;
          default:
            iconName = 'ios-beer';
        }

        return <IconComponent name={iconName} size={35} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: '#999999',
      labelStyle: {
        fontSize: 12,
        fontFamily: 'Montserrat',
      },
      style: {
        backgroundColor: 'black',
      },
    },
  },
);
