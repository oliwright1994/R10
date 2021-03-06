import React from 'react';
import styles from './styles';
import MapView, {Marker} from 'react-native-maps';

const Maps = () => {
  return (
    <MapView
      style={styles.map}
      showsUserLocation={true}
      region={{
        latitude: 49.26326812868976,
        longitude: -123.13764485095908,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02,
      }}>
      <Marker
        image={require('../../assets/images/map_pin.png')}
        coordinate={{
          latitude: 49.26326812868976,
          longitude: -123.13764485095908,
        }}
        title={'R10'}
      />
    </MapView>
  );
};

export default Maps;
