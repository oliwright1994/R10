import {StyleSheet} from 'react-native';
import theme from '../../config/theme';

const styles = StyleSheet.create({
  root: {
    padding: 15,
    flex: 1,
  },
  heading: {
    fontSize: 28,
    marginTop: 10,
    marginBottom: 10,
    fontFamily: theme.fonts.regular,
  },
  descriptionText: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10,
    fontFamily: theme.fonts.regular,
  },
  logoWrapper: {
    padding: 30,
    marginBottom: 20,
    alignItems: 'center',
    borderBottomColor: theme.pallete.lightGray,
    borderBottomWidth: 1,
  },
  footerText: {
    fontSize: 18,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 20,
    fontFamily: theme.fonts.light,
  },
  divider: {
    borderBottomColor: theme.pallete.lightGray,
    borderBottomWidth: 1,
    marginBottom: 10,
  },
});

export default styles;
