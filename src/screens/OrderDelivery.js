import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {COLORS, FONTS, GOOGLE_API_KEY, icons} from '../../constants';
import MapViewDirections from 'react-native-maps-directions';

export default function OrderDelivery({route, navigation}) {
  const [restaurant, setrestaurant] = useState(null);
  const [streetName, setstreetName] = useState('');
  const [fromLocation, setfromLocation] = useState(null);
  const [toLocation, settoLocation] = useState(null);
  const [region, setregion] = useState(null);

  useEffect(() => {
    let {restaurant, currentLocation} = route.params;

    let fromLoc = currentLocation.gps;
    let toLoc = restaurant.location;
    let street = currentLocation.streetName;

    let mapRegion = {
      latitude: (fromLoc.latitude + toLoc.latitude) / 2,
      longitude: (fromLoc.longitude + toLoc.longitude) / 2,
      latitudeDelta: Math.abs(fromLoc.latitude - toLoc.latitude) * 2,
      longitudeDelta: Math.abs(fromLoc.longitude - toLoc.longitude) * 2,
    };

    setrestaurant(restaurant);
    setstreetName(street);
    setfromLocation(fromLoc);
    settoLocation(toLoc);
    setregion(mapRegion);
  }, [toLocation]);

  function renderMap() {
    const destinationMarker = () => {
      console.log(toLocation)
      return (
        <Marker coordinate={toLocation}>
          <View style={styles.marker}>
            <View style={styles.markerBorder}>
              <Image style={styles.pin} source={icons.pin} />
            </View>
          </View>
        </Marker>
      );
    };

    const carIcon = () => {
      return (
        <Marker coordinate={fromLocation} anchor={{x: 0.5, y: 0.5}} flat={true}>
          <Image style={{...FONTS.icon}} source={icons.car} />
        </Marker>
      );
    };

    return (
      <View style={{flex: 1}}>
        <MapView
          provider={PROVIDER_GOOGLE}
          initialRegion={region}
          style={{flex: 1}}>
          {/* <MapViewDirections
          origin={fromLocation}
          destination={toLocation}
          apikey={GOOGLE_API_KEY}
          strokeWidth={5}
          strokeColor={COLORS.primary}
          optimizeWaypoints={true} /> */}
          {destinationMarker()}
          {carIcon()}
        </MapView>
      </View>
    );
  }

  return <View style={{flex: 1}}>{renderMap()}</View>;
}

const styles = StyleSheet.create({
  marker: {
    backgroundColor: COLORS.white,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  markerBorder: {
    backgroundColor: COLORS.primary,
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  pin: {
    width: 20,
    height: 20,
    tintColor: COLORS.white,
  },
});
