/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { View, Text, Image } from 'react-native';
import React from 'react';

const ObjectArray = () => {
  var products = [
    {
      id: 1,
      name: 'Samsung',
      image: 'https://m.media-amazon.com/images/I/71J3HJtLNeL._AC_SL1500_.jpg',
    },
    {
      id: 2,
      name: 'Samsung',
      image: 'https://m.media-amazon.com/images/I/71J3HJtLNeL._AC_SL1500_.jpg',
    },
  ];
  return (
    <View>
      {
        products.map((product) => <View>
          <Text>{product.id}</Text>
          <Text>{product.name}</Text>
          <Image style={{ width: 100, height: 100 }} source={{ uri: product.image }} />
        </View>)
      }
    </View>
  );
};

export default ObjectArray;
