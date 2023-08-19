/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const ProfileStack = createNativeStackNavigator();

const ProfileStackScreen = () => {
  return (
    <View>
      <Text>ProfileStack</Text>
    </View>
  );
};

export default ProfileStackScreen;
