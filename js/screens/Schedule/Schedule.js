import React from 'react';
import styles from './styles';
import {ScrollView, Text, SectionList, View} from 'react-native';

const Schedule = ({sessions}) => {
  console.log(sessions);
  return (
    <SectionList
      renderItem={({item, index}) => (
        <View>
          <Text style={styles.title} key={index}>
            {item.title}
          </Text>
          <Text style={styles.location}>{item.location}</Text>
        </View>
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

export default Schedule;
