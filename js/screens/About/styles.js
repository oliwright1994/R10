import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    padding: 15,
    flex: 1,
  },
  heading: {
    fontSize: 28,
    marginTop: 10,
    marginBottom: 10,
    fontFamily: 'Montserrat',
  },
  descriptionText: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10,
    fontFamily: 'Montserrat',
  },
  loaderWrapper: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoWrapper: {
    padding: 30,
    marginBottom: 20,
    alignItems: 'center',
    borderBottomColor: '#999999',
    borderBottomWidth: 1,
  },
});

export default styles;
