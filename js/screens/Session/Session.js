import React from 'react';
import styles from './styles';
import {Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PurpleButton from '../../components/PurpleButton';

const Session = ({
  session,
  speaker,
  navigation,
  addFaveSession,
  removeFaveSession,
  faveIds,
}) => {
  let IconComponent = Ionicons;
  return (
    <ScrollView style={styles.root}>
      <View style={styles.sessionWrapper}>
        <View style={styles.topText}>
          <Text style={styles.location}>{session.location}</Text>
          {faveIds.includes(session.id) ? (
            <IconComponent name="md-heart" size={18} style={styles.faveIcon} />
          ) : null}
        </View>
        <Text style={styles.title}>{session.title}</Text>
        <Text style={styles.time}>
          {new Date(session.startTime).toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
          })}
        </Text>
        <Text style={styles.description}>{session.description}</Text>
        {speaker ? (
          <View>
            <Text style={styles.presentedText}>Presented By:</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Speaker', {speaker});
              }}
              opacity={0.6}
              style={styles.speakerWrapper}>
              <Image
                style={styles.speakerPicture}
                source={{uri: speaker.image}}
              />
              <Text style={styles.speakerName}>{speaker.name}</Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
      <View style={styles.buttonWrapper}>
        {faveIds.includes(session.id) ? (
          <PurpleButton
            text="Remove from faves"
            onPress={() => removeFaveSession(session.id)}
          />
        ) : (
          <PurpleButton
            text="Add to fave sessions"
            onPress={() => addFaveSession(session.id)}
          />
        )}
      </View>
    </ScrollView>
  );
};

export default withNavigation(Session);
