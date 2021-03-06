import {StyleSheet} from 'react-native';
import theme from '../../config/theme';

const styles = StyleSheet.create({
  seperator: {
    borderBottomColor: theme.pallete.lightGray,
    borderBottomWidth: 1,
  },
  heading: {
    backgroundColor: theme.pallete.lightGray,
    fontFamily: theme.fonts.regular,
    fontSize: 16,
    padding: 10,
  },
  title: {
    fontFamily: theme.fonts.regular,
    fontSize: 18,
    padding: 10,
  },
  location: {
    fontFamily: theme.fonts.regular,
    fontSize: 16,
    color: theme.pallete.mediumGray,
    paddingBottom: 10,
    paddingLeft: 10,
  },
  noFavesText: {
    fontFamily: theme.fonts.regular,
    fontSize: 22,
    color: theme.pallete.mediumGray,
  },
  noFavesWrapper: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
