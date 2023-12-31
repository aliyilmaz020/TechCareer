/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import { CounterContext } from '../../../context/CounterContext';


const ProfileMainScreen = () => {
  const { counter } = useContext(CounterContext);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 48, fontWeight: '700' }}>{counter}</Text>

    </View>
  );
};

export default ProfileMainScreen;

