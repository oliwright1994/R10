import {StyleSheet} from 'react-native';
import theme from '../../config/theme';

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.pallete.purple,
    borderRadius: 35,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    paddingBottom: 15,
    margin: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontFamily: theme.fonts.regular,
    textAlign: 'center',
  },
});

export default styles;
