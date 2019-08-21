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
  },
  faveIcon: {
    color: theme.pallete.red,
  },
  botText: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 20,
  },
});

export default styles;
