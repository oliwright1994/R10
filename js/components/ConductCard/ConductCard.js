import React from 'react';
import {View, Text, Animated, TouchableOpacity, Easing} from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

export default class ConductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };

    this.spinValue = new Animated.Value(0);
  }
  show = () => {
    this.spinValue.setValue(0);
    this.setState({open: !this.state.open});
    const spinTextAnimation = this.createAnimation(this.spinValue, {
      toValue: 1,
      duration: 300,
      easing: Easing.linear,
    });
    Animated.parallel([spinTextAnimation, spinTextAnimation]).start();
  };

  createAnimation = (animatedValue, animationConfig) => {
    return Animated.timing(animatedValue, animationConfig);
  };

  render() {
    const IconComponent = Ionicons;
    const {conduct} = this.props;
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
    const show = this.state.open ? 'flex' : 'none';
    return (
      <View>
        <TouchableOpacity
          opacity={1}
          activeOpacity={1.0}
          onPress={() => this.show()}
          style={styles.touchableHeading}>
          <Animated.View style={{transform: [{rotate: spin}], marginRight: 5}}>
            <Text style={styles.heading}>
              <IconComponent
                name={this.state.open ? 'ios-remove' : 'ios-add'}
                size={20}
              />
            </Text>
          </Animated.View>
          <Text style={styles.heading}>{conduct.title}</Text>
        </TouchableOpacity>

        <Text style={{...styles.bodyText, display: show}}>
          {conduct.description}
        </Text>
      </View>
    );
  }
}

ConductCard.propTypes = {
  conduct: PropTypes.shape({
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
};
