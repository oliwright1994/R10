import {StyleSheet} from 'react-native';
import theme from '../../config/theme';

const styles = StyleSheet.create({
  root: {
    padding: 15,
    flex: 1,
  },
  sessionWrapper: {
    flex: 1,
  },
  speakerPicture: {
    width: 75,
    height: 75,
    borderRadius: 50,
  },
  speakerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  presentedText: {
    color: theme.pallete.mediumGray,
    fontSize: 18,
    fontFamily: theme.fonts.regular,
  },
  speakerName: {
    fontSize: 18,
    fontFamily: theme.fonts.regular,
    marginLeft: 20,
  },
  location: {
    fontFamily: theme.fonts.regular,
    fontSize: 18,
    color: theme.pallete.mediumGray,
    paddingBottom: 10,
    paddingTop: 10,
  },
  time: {
    fontFamily: theme.fonts.regular,
    fontSize: 18,
    color: theme.pallete.red,
    marginBottom: 15,
  },
  title: {
    fontFamily: theme.fonts.regular,
    fontSize: 26,
    marginTop: 15,
    marginBottom: 15,
  },
  description: {
    fontFamily: theme.fonts.light,
    fontSize: 18,
    marginBottom: 18,
    lineHeight: 28,
  },
  buttonWrapper: {
    borderColor: theme.pallete.lightGray,
    borderTopWidth: 1,
    alignItems: 'center',
  },
  faveIcon: {
    color: theme.pallete.red,
  },
  topText: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingRight: 10,
    alignItems: 'center',
  },
});

export default styles;
