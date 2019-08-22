import {StyleSheet} from 'react-native';
import theme from '../../config/theme';

const styles = StyleSheet.create({
  heading: {
    color: theme.pallete.purple,
    marginTop: 20,
    marginBottom: 20,
    fontSize: 20,
    fontFamily: theme.fonts.regular,
  },
  bodyText: {
    fontSize: 20,
    fontFamily: theme.fonts.light,
  },
});

export default styles;
