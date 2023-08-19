/* eslint-disable prettier/prettier */
import { View, Text, Button } from 'react-native';
import React from 'react';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title='Go to Profile' onPress={() => navigation.navigate("Profile")} />
    </View>
  );
};

export default HomeScreen;
