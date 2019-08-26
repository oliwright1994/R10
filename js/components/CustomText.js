import React, {Component} from 'react';
import {Text} from 'react-native';

const CustomText = () => {
  return <Text>{this.props.children}</Text>;
};

export default CustomText;


          <Text>Presented By:</Text>
<TouchableHighlight
        onPress={() => {
          navigation.navigate('Speaker', {
            speaker,
          });
        }}>

          <Image style={styles.image} source={{uri: speaker.image}} />
          <Text>{speaker.name}</Text>

      </TouchableHighlight>
