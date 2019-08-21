import React from 'react';
import styles from './styles';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

import theme from '../../config/theme';

const Maps = () => {
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      region={{
        latitude: 49.2696213,
        longitude: -123.1280862,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      showsUserLocation={false}>
      <Marker
        pinColor={theme.pallete.red}
        coordinate={{
          latitude: 49.2696213,
          longitude: -123.1280862,
        }}
        title={'R10'}
      />
    </MapView>
  );
};

export default Maps;
