/* eslint-disable semi */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { Image, Text, View } from 'react-native';
import React from 'react';
const MiniBox = ({ image, title }) => {
  return <View style={{
    borderRadius: 20, width: 120, height: 45, borderWidth: 2, borderColor: '#008FA0', marginRight: 10, flexDirection: 'row', padding: 2, alignItems: 'center', justifyContent: 'space-around'
    , backgroundColor: '#ffffff'
  }}>
    <Image style={{ tintColor: '#008FA0', width: 38, height: 36 }} source={image} />
    <Text style={{ marginRight: 8, fontSize: 13, fontWeight: '400', color: 'black' }}>{title}</Text>
  </View>
};

export default MiniBox;
