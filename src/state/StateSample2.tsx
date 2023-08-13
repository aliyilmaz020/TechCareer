/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';

const StateSample2 = () => {
  const [numbers, setnumbers] = useState([1, 2, 3]);

  const addRandom = () => {
    var randomNumbers = Math.floor(Math.random() * 9999);
    const newNumbers = [...numbers, randomNumbers];
    setnumbers(newNumbers);
  };

  return (
    <View>
      <Text>Lenght: {numbers.length}</Text>
      <Button title="Add Random Number" onPress={addRandom} />
      {
        numbers && numbers.map(item => <Text>{item}</Text>) //numbers && => null ve undefined değilse
      }
    </View>
  );
};

export default StateSample2;
