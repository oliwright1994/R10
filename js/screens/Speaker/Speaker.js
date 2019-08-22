import React from 'react';
import styles from './styles';
import {withNavigation} from 'react-navigation';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Linking,
} from 'react-native';
import PurpleButton from '../../components/PurpleButton';

const Speaker = ({navigation}) => {
  const speaker = navigation.getParam('speaker');
  console.log(speaker);
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.topText}>
        <TouchableOpacity
          style={styles.backButtonButton}
          opacity={0.6}
          onPress={() => {
            navigation.goBack();
          }}>
          <Text style={styles.backButton}>X</Text>
        </TouchableOpacity>
        <Text style={styles.about}>About the Speaker</Text>
      </View>
      <ScrollView contentContainerStyle={styles.speakerProfile}>
        <Image style={styles.speakerPicture} source={{uri: speaker.image}} />
        <Text style={styles.speakerName}>{speaker.name}</Text>
        <Text style={styles.speakerBio}>{speaker.bio}</Text>
        <PurpleButton
          text="Read more on Wikipedia"
          onPress={() => Linking.openURL(speaker.url)}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default withNavigation(Speaker);
