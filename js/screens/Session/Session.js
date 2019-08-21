import React from 'react';
import styles from './styles';
import {Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';

const Session = ({session, speaker, navigation}) => {
  return (
    <ScrollView style={styles.root}>
      <View style={styles.sessionWrapper}>
        <Text style={styles.location}>{session.location}</Text>
        <Text style={styles.title}>{session.title}</Text>
        <Text style={styles.time}>
          {new Date(session.startTime).toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
          })}
        </Text>
        <Text style={styles.description}>{session.description}</Text>
        <Text style={styles.presentedText}>Presented By:</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Speaker', {speaker});
          }}
          opacity={0.6}
          style={styles.speakerWrapper}>
          <Image style={styles.speakerPicture} source={{uri: speaker.image}} />
          <Text style={styles.speakerName}>{speaker.name}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonWrapper} />
    </ScrollView>
  );
};

export default withNavigation(Session);
