import React from 'react';
import {StyleSheet, View, Platform} from 'react-native';
import {Header} from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import theme from '../config/theme';
import Icon from 'react-native-vector-icons/Ionicons';

const GradientHeader = props => {
  return (
    <View style={{backgroundColor: 'white', overflow: 'hidden'}}>
      <LinearGradient
        colors={['#cf392a', '#9963ea']}
        start={{x: 0.0, y: 1.0}}
        end={{x: 1.0, y: 0.0}}
        style={[StyleSheet.absoluteFill, {height: '100%', width: '100%'}]}
      />
      <Header {...props} />
    </View>
  );
};

export const MenuButton = ({navigation}) => {
  return (
    <Icon
      style={{paddingLeft: 10}}
      name="md-menu"
      size={35}
      color="white"
      onPress={navigation.openDrawer}
    />
  );
};

export const BackArrow = ({navigation}) => (
  <Icon
    style={{paddingLeft: 10}}
    name="md-arrow-back"
    size={35}
    color="white"
    onPress={() => navigation.goBack()}
  />
);

export const sharedNavigationOptions = navigation => ({
  headerBackTitle: null,
  header: props => <GradientHeader {...props} />,
  headerTintColor: 'white',
  headerStyle: {
    backgroundColor: 'transparent',
  },
  headerTitleStyle: {color: 'white', fontFamily: theme.fonts.regular},
  ...Platform.select({
    android: {
      headerLeft:
        navigation.state.routeName === 'Session' ? (
          <BackArrow navigation={navigation} />
        ) : (
          <MenuButton navigation={navigation} />
        ),
    },
  }),
});
