/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const CartStack = createNativeStackNavigator();
const CartStackScreen = () => {
  return (
    <View>
      <Text>CartStack</Text>
    </View>
  );
};

export default CartStackScreen;
