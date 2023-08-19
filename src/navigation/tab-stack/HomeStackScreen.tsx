/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <>
      <HomeStack.Navigator>
        <HomeStack.Screen name='HomeMain' component={HomeMainScreen} />
        <HomeStack.Screen name='Chart' component={HomeChartScreen} />
      </HomeStack.Navigator>
    </>
  );
};

export default HomeStackScreen;

function HomeChartScreen() {
  return (
    <View>
      <Text>HomeChartScreen</Text>
    </View>
  );
}

function HomeMainScreen() {
  return (
    <View>
      <Text>HomeMainScreen</Text>
    </View>
  );
}
