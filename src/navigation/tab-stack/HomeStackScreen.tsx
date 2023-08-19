/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React, { useRef } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LottieView from 'lottie-react-native';

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
  const animation = useRef(null);
  return (
    <View>
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 200,
          height: 200,
          backgroundColor: '#ffffff',
        }}
        source={require('../../lottieSample/karpuz.json')}
      />
    </View>
  );
}
