import {StyleSheet} from 'react-native';
import theme from '../../config/theme';

const styles = StyleSheet.create({
  seperator: {
    borderBottomColor: theme.pallete.lightGray,
    borderBottomWidth: 1,
  },
  heading: {
    backgroundColor: theme.pallete.lightGray,
    fontFamily: 'Montserrat',
    fontSize: 16,
    padding: 10,
  },
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
