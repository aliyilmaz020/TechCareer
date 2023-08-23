/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import { CounterContext } from './CounterContext';
import { Button } from 'react-native-paper';

const CounterScreen = () => {
  const { counter, setcounter } = useContext(CounterContext);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 48, fontWeight: '700' }}>{counter}</Text>
      <Button onPress={() => setcounter(counter + 1)}>Increase</Button>
    </View>
  );
};

export default CounterScreen;
