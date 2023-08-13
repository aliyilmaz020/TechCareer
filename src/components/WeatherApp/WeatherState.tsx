/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line react-native/no-inline-styles
import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const WeatherState = ({ celsius, image, time, imgWidth, imgHeight }) => {
  return <View style={{ flex: 1 }}>
    <Text style={{ fontSize: 20, fontWeight: 500, color: '#ffffff' }}>{celsius}</Text>
    <Image style={{ width: imgWidth, height: imgHeight }} source={image} />
    <Text style={{ fontSize: 20, fontWeight: 500, color: '#ffffff' }} >{time}</Text>
  </View>;
};
export default WeatherState;
