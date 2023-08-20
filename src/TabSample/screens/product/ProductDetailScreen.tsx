/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React from 'react';

const ProductDetailScreen = ({ route }) => {

  const { item } = route.params;

  console.log("Item", item);

  return (
    <View>
      <Text>Name: {item.name}</Text>
      <Text>quantityPerUnit: {item.quantityPerUnit}</Text>
    </View>
  );
};


export default ProductDetailScreen;
