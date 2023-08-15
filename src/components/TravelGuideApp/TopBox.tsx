/* eslint-disable semi */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { View, Text, Image } from 'react-native'
import React from 'react'

const TopBox = ({ image, tripsTitle, location }) => {
  return <View style={{ width: 150, height: 209, borderRadius: 20, backgroundColor: '#ffffff', alignItems: 'center', gap: 3, marginRight: 10 }}>
    <Image style={{ width: 149, height: 119, borderRadius: 30, marginTop: 5 }} source={{ uri: image }} />
    <View style={{ flexDirection: 'row', gap: 45, alignItems: 'center', marginTop: 5 }}>
      <Text style={{ fontSize: 13, color: 'black', fontWeight: '600' }}>{tripsTitle}</Text>
      <Text style={{ fontSize: 11, color: '#636363', fontWeight: '400' }}>4.5</Text>
    </View>
    <View style={{ flexDirection: 'row', gap: 3, alignSelf: 'flex-start', marginTop: 3, margin: 7 }}>
      <Image style={{ height: 12, width: 10 }} source={require('../../../assets/TravelPics/Location.png')} />
      <Text style={{ fontSize: 12, fontWeight: '500', color: '#636363' }}>{location}</Text>
    </View>
  </View>
}

export default TopBox