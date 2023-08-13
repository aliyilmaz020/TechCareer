/* eslint-disable no-unreachable */
/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import { View, Text } from 'react-native';
import React from 'react';

const ArraySample = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  var cities = ['İstanbul', 'Ankara', 'İzmir', 'Bursa'];
  return (
    <View>
      {
        cities.map((city, index) => <Text>{index} - {city}</Text>)
      }
    </View>
  );
};

export default ArraySample;
