import React from 'react';
import {TouchableOpacity, Text, View, Platform} from 'react-native';
import styles from './styles';
import {withNavigation} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

const SessionCard = ({item, navigation, faveIds}) => {
  let IconComponent = Ionicons;

  return (
    <TouchableOpacity
      opacity={0.6}
      onPress={() => {
        navigation.navigate('Session', {item});
      }}>
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.botText}>
        <Text style={styles.location}>{item.location}</Text>
        {faveIds.includes(item.id) ? (
          <IconComponent
            name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'}
            size={18}
            style={styles.faveIcon}
          />
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

export default withNavigation(SessionCard);

SessionCard.propTypes = {
  item: PropTypes.shape({
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    startTime: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    speaker: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
  navigation: PropTypes.object.isRequired,
  faveIds: PropTypes.arrayOf(PropTypes.string.isRequired),
};
