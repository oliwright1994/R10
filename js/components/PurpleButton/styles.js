import {StyleSheet} from 'react-native';
import theme from '../../config/theme';

const styles = StyleSheet.create({
  button: {
    borderRadius: 35,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    paddingBottom: 15,
    margin: 30,
    overflow: 'hidden',
    width: 'auto',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontFamily: theme.fonts.regular,
    textAlign: 'center',
  },
  gradient: {
    position: 'absolute',
    width: '100%',
    height: '400%',
  },
});

export default styles;
