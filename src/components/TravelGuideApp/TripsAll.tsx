/* eslint-disable semi */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native'
import React from 'react'

const TripsAll = ({ leftTitle, rightTitle }) => {
  return <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', margin: 20, alignItems: 'center' }}>
    <Text style={{ fontSize: 16, fontWeight: '700', color: 'black' }}>{leftTitle}</Text>
    <Text style={{ color: '#A2A2A2', fontSize: 14 }}>{rightTitle}</Text>
  </View>
}

export default TripsAll;
