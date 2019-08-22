import React from 'react';
import styles from './styles';
import {Text, SectionList, View} from 'react-native';
import SessionCard from '../../components/SessionCard';
import {withNavigation} from 'react-navigation';

const Faves = ({sessions, navigation, faveIds}) => {
  return (
    <SectionList
      renderItem={({item, index}) => (
        <SessionCard
          item={item}
          index={index}
          navigation={navigation}
          faveIds={faveIds}
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

export default withNavigation(Faves);
