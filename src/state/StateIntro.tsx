/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';

const StateIntro = () => {
  console.log('Component rendered!!');
  //State değiştiğinde component bir daha render olur
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 1);
  };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 70, fontWeight: '500' }}>{counter}</Text>
      <Button onPress={increase} title='Increase' />
    </View>
  );
};

export default StateIntro;
