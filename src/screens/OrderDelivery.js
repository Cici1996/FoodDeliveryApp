import React, { useEffect, useState,useRef } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { COLORS, FONTS, GOOGLE_API_KEY, icons } from '../../constants';
import MapboxGL, { Logger } from "@react-native-mapbox-gl/maps";

MapboxGL.setAccessToken(GOOGLE_API_KEY);

export default function OrderDelivery({ route, navigation }) {
  const [restaurant, setrestaurant] = useState(null);
  const [streetName, setstreetName] = useState('');
  const [fromLocation, setfromLocation] = useState(null);
  const [toLocation, settoLocation] = useState(null);
  const [region, setregion] = useState(null);
  const timelineLoaded = useRef(false);

  useEffect(() => {
    let { restaurant, currentLocation } = route.params;

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
    
    if (!timelineLoaded.current){
      setregion(mapRegion);
      timelineLoaded.current = true;
    }

  }, []);

  function renderMap() {
    if(region != null){
      return (
        <View style={{ flex: 1 }}>
          <MapboxGL.MapView style={{ flex: 1 }}>
          </MapboxGL.MapView>
        </View>
      );
    }
  }

  return <View style={{ flex: 1 }}>{renderMap()}</View>;
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
