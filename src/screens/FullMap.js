import React, { Component } from 'react';
import {  StyleSheet, View, Text, PermissionsAndroid, ToastAndroid, ActivityIndicator, Image } from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import { dimensions } from '../../styles/theme';

async function requestLocationPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      ToastAndroid.show('Location permission granted', ToastAndroid.SHORT)
    } else {
      ToastAndroid.show('Location permission denied', ToastAndroid.SHORT)
    }
  } catch (err) {
    console.warn(err)
  }
}
function buildMapURL(lat, lng) {
  var MAPURL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?';
  MAPURL += 'location=' + lat + ',' + lng;
  MAPURL += '&radius=1000';
  MAPURL += '&type=hospital';
  MAPURL += '&sensor=true';
  MAPURL += '&key=YOUR_API_KEY';
  return MAPURL;
};
export default class FullMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0,
      isLoading: true,
      markers: [],
      selectedMarker: [],
    }
  }
  getNearbyPlaces(lat, lng) {
    return fetch(buildMapURL(lat, lng))
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        markers: responseJson.results
      }, function(){
      });
    })
    .catch((error) =>{
      console.error(error);
    });
  }
  componentDidMount() {
    PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
    .then((granted) => {
      if(granted) {
        console.log('Location granted');
        Geolocation.getCurrentPosition(
          (position) => {
            this.setState({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              isLoading: false,
            });
            this.getNearbyPlaces(this.state.latitude, this.state.longitude);
          },
          (error) => this.setState({ error: error.message }),
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
      }
    })
  }
  render() {
    if(!this.state.isLoading) {
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
        <Marker coordinate={{latitude: this.state.latitude,
            longitude: this.state.longitude}}
            image={require('../images/map-marker.png')}/>
        {this.state.markers.map(marker => (
        <Marker
          key={marker.place_id}
          coordinate={{latitude: marker.geometry.location.lat, longitude: marker.geometry.location.lng}}
          title={marker.name}
          image={require('../images/hospital-marker.png')}
          onCalloutPress={() => this.setState({selectedMarker: [marker.name, marker.vicinity]})}
        />
        ))}       
        </MapView>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <ActivityIndicator size='large'/>
      </View>
    )
  }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});