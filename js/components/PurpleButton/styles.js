import {StyleSheet} from 'react-native';
import theme from '../../config/theme';

const styles = StyleSheet.create({
  button: {
    borderRadius: 35,
    overflow: 'hidden',
    display: 'flex',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: theme.fonts.regular,
    textAlign: 'center',
    padding: 20,
    paddingTop: 15,
    paddingBottom: 15,
  },
  gradient: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    padding: 0,
    margin: 0,
  },
});

export default styles;
