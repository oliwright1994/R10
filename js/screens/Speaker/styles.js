import {StyleSheet} from 'react-native';
import theme from '../../config/theme';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'black',
  },
  backButton: {
    color: 'white',
    fontSize: 30,
    fontFamily: theme.fonts.regular,
    zIndex: 100,
    left: 0,
    top: 0,
  },
  backButtonButton: {
    position: 'absolute',
    zIndex: 200,
  },
  about: {
    color: 'white',
    flex: 1,
    textAlign: 'center',
    fontFamily: theme.fonts.regular,
    fontSize: 24,
  },
  topText: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    margin: 15,
    marginBottom: 30,
    position: 'relative',
  },
  speakerProfile: {
    backgroundColor: 'white',
    borderRadius: 5,
    alignItems: 'center',
    flex: 1,
    margin: 15,
    paddingTop: 20,
    paddingBottom: 20,
  },
  speakerPicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  speakerName: {
    fontSize: 28,
    fontFamily: theme.fonts.regular,
  },
  speakerBio: {
    fontFamily: theme.fonts.light,
    fontSize: 18,
    lineHeight: 22,
    margin: 20,
  },
});

export default styles;
