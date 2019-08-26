import React from 'react';
import styles from './styles';
import {Text, SectionList, View} from 'react-native';
import SessionCard from '../../components/SessionCard';
import {withNavigation} from 'react-navigation';
import moment from 'moment';
import PropTypes from 'prop-types';

const Schedule = ({sessions, navigation, faveIds}) => {
  return (
    <SectionList
      renderItem={({item, index}) => (
        <SessionCard
          faveIds={faveIds}
          item={item}
          index={index}
          navigation={navigation}
        />
      )}
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.heading}>
          {moment(title)
            .format('hh:mm a')
            .toUpperCase()}
        </Text>
      )}
      sections={sessions}
      keyExtractor={(item, index) => item + index}
      ItemSeparatorComponent={() => <View style={styles.seperator} />}
    />
  );
};

export default withNavigation(Schedule);

Schedule.propTypes = {
  sessions: PropTypes.arrayOf(
    PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          description: PropTypes.string.isRequired,
          id: PropTypes.string.isRequired,
          location: PropTypes.string.isRequired,
          startTime: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          speaker: PropTypes.shape({
            id: PropTypes.string.isRequired,
          }),
        }),
      ),
    }),
  ),
  navigation: PropTypes.object.isRequired,
  faveIds: PropTypes.arrayOf(PropTypes.string.isRequired),
};
