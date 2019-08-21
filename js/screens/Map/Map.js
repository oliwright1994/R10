import React from 'react';
import styles from './styles';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

import theme from '../../config/theme';

const Maps = () => {
  return (
    <MapView
      style={styles.map}
      region={{
        latitude: 49.26326812868976,
        longitude: -123.13764485095908,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      showsUserLocation={false}>
      <Marker
        pinColor={theme.pallete.red}
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
