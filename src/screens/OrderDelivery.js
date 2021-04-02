import React, { useEffect, useState, useRef } from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, GOOGLE_API_KEY, icons, SIZES } from '../../constants';
import MapboxGL, { Logger } from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken(GOOGLE_API_KEY);

export default function OrderDelivery({ route, navigation }) {
  const [restaurant, setrestaurant] = useState(null);
  const [streetName, setstreetName] = useState('');
  const [fromLocation, setfromLocation] = useState(null);
  const [toLocation, settoLocation] = useState(null);
  const [region, setregion] = useState(null);

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
    setfromLocation([fromLoc.longitude, fromLoc.latitude]);
    settoLocation([toLoc.longitude, toLoc.latitude]);
    setregion(mapRegion);
  }, []);

  function renderMap() {
    if (region != null) {
      let houseBounds = [
        [region.longitude, region.latitude],
        [region.longitude, region.latitude],
      ];
      return (
        <View style={{ flex: 1 }}>
          <MapboxGL.MapView style={{ flex: 1 }}>
            <MapboxGL.Camera
              bounds={{
                ne: houseBounds[0],
                sw: houseBounds[1],
              }}
              maxZoomLevel={14} />
            <MapboxGL.MarkerView coordinate={toLocation}>
              <View style={styles.marker}>
                <View style={styles.markerBorder}>
                  <Image source={icons.pin} style={styles.pin} />
                </View>
              </View>
            </MapboxGL.MarkerView>

            <MapboxGL.MarkerView coordinate={fromLocation}>
              <Image source={icons.car} style={{
                width: 30,
                height: 30,
                tintColor: COLORS.black,
              }} />
            </MapboxGL.MarkerView>

          </MapboxGL.MapView>
        </View>
      );
    }
  }

  function renderDestinationHeader() {
    return (
      <View style={{
        height: 50,
        position: "absolute",
        top: 50,
        left: 0,
        right: 0,
        alignItems: "center",
        justifyContent: "center"
      }}>
        <View style={{
          flexDirection: "row",
          alignItems: "center",
          width: SIZES.width * 0.9,
          paddingVertical: SIZES.padding,
          paddingHorizontal: SIZES.padding * 2,
          backgroundColor: COLORS.white,
          borderRadius: SIZES.radius
        }}>
          <Image source={icons.pin} style={{
            width: 30,
            height: 30,
            marginRight: SIZES.padding,
            tintColor: COLORS.primary
          }} />
          <View style={{ flex: 1 }}>
            <Text style={{ ...FONTS.body3 }}>
              {streetName}
            </Text>
          </View>
          <Text style={{ ...FONTS.body3 }}>
            10 mins
            </Text>
        </View>
      </View>
    )
  }

  function renderDeliveryInfo() {
    return (
      <View style={{
        position: "absolute",
        bottom: 50,
        left: 0,
        right: 0,
        alignItems: "center",
        justifyContent: "center"
      }}>
        <View style={{
          backgroundColor: COLORS.white,
          width: SIZES.width * 0.9,
          paddingVertical: SIZES.padding * 3,
          paddingHorizontal: SIZES.padding * 2,
          borderRadius: SIZES.radius
        }}>
          <View style={{
            flexDirection: "row",
            alignItems: "center"
          }}>
            <Image source={icons.avatarUser} style={{
              width: 50,
              height: 50,
              borderRadius: 50 / 2
            }} />
            <View style={{
              flex: 1,
              marginLeft: SIZES.padding
            }}>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ ...FONTS.h4 }}>
                  {restaurant?.courier?.name}
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Image source={icons.star}
                    style={{ width: 18, height: 18, tintColor: COLORS.primary, marginRight: SIZES.padding }} />
                  <Text style={{ ...FONTS.body3 }}>{restaurant?.rating}</Text>
                </View>
              </View>
              <Text style={{ color: COLORS.darkGray, ...FONTS.body4 }}>
                {restaurant?.name}
              </Text>
            </View>
          </View>
          <View style={{
            flexDirection: "row",
            marginTop: SIZES.padding * 2,
            justifyContent: "space-between"
          }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Home")}
              style={{
                backgroundColor: COLORS.primary,
                flex: 1,
                height: 50,
                marginRight: 10,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10
              }}>
              <Text style={{ ...FONTS.h4, color: COLORS.white }}>Call</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                backgroundColor: COLORS.secondary,
                flex: 1,
                height: 50,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10
              }}>
              <Text style={{ ...FONTS.h4, color: COLORS.white }}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }


  function renderButtonZoom() {
    return (
      <View style={{
        position:"absolute",
        bottom:SIZES.height * 0.35,
        right:SIZES.padding * 2,
        width:60,
        height:130,
        justifyContent:"space-between"
      }}>
        <TouchableOpacity style={{
          width:60,
          height:60,
          borderRadius:60/2,
          backgroundColor:COLORS.white,
          alignItems:"center",
          justifyContent:"center"
        }}>
          <Text style={{...FONTS.body1}}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
          width:60,
          height:60,
          borderRadius:60/2,
          backgroundColor:COLORS.white,
          alignItems:"center",
          justifyContent:"center"
        }}>
          <Text style={{...FONTS.body1}}>-</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return <View style={{ flex: 1 }}>
    {renderMap()}
    {renderDestinationHeader()}
    {renderDeliveryInfo()}
    {renderButtonZoom()}
  </View>;
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
  }
});
