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
  },
  speakerProfile: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 20,
    alignItems: 'center',
    flex: 1,
    margin: 15,
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
    marginBottom: 20,
  },
  speakerBio: {
    fontFamily: theme.fonts.light,
    fontSize: 18,
    lineHeight: 22,
  },
});

export default styles;
