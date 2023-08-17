/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Text, TextInput, Button, StyleSheet, SafeAreaView } from 'react-native';
import React, { useState } from 'react';

const StateTextInput = () => {
  const [cityName, setcityName] = useState('');
  const [cities, setcities] = useState([]);

  const add = () => {
    if (cityName !== '') {
      var city = cities.find(x => x == cityName);
      if (!city) {
        setcities([...cities, cityName]);
        setcityName('');
      }
    }
  };
  const clear = () => {
    setcities([]);
  };
  return (
    <SafeAreaView>
      <Button title='clear' onPress={clear} />
      <Text style={{ fontSize: 35 }}>Length: {cities.length}</Text>
      <TextInput value={cityName} onChangeText={setcityName} style={styles.input} />
      <Button title='add' onPress={add} />
      {
        // eslint-disable-next-line react-native/no-inline-styles
        cities && cities.map(item => <Text style={{ fontSize: 35 }}>{item}</Text>)
      }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default StateTextInput;
