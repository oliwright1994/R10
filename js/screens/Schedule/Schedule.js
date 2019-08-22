import React from 'react';
import styles from './styles';
import {Text, SectionList, View} from 'react-native';
import SessionCard from '../../components/SessionCard';
import {withNavigation} from 'react-navigation';

const Schedule = ({sessions, navigation, faveIds}) => {
  console.log(sessions);
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
          {new Date(title).toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
          })}
        </Text>
      )}
      sections={sessions}
      keyExtractor={(item, index) => item + index}
      ItemSeparatorComponent={() => <View style={styles.seperator} />}
    />
  );
};

export default withNavigation(Schedule);
