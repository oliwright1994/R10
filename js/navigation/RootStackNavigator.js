import {createStackNavigator, createAppContainer} from 'react-navigation';
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
