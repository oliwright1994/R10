import {StyleSheet} from 'react-native';
import theme from '../../config/theme';

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Montserrat',
    fontSize: 18,
    padding: 10,
  },
  location: {
    fontFamily: 'Montserrat',
    fontSize: 16,
    color: theme.pallete.mediumGray,
    paddingBottom: 10,
    paddingLeft: 10,
  },
});

export default styles;
