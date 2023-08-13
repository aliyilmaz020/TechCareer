/* eslint-disable prettier/prettier */
import { View, TextInput, StyleSheet, Button, FlatList, Text } from 'react-native';
import React, { useState } from 'react';

const StateSample4 = () => {
  const [name, setname] = useState('');
  const [surname, setsurname] = useState('');
  const [users, setusers] = useState([]);

  const addUsers = () => {
    let newUser = {
      name,
      surname,
    };
    setusers([...users, newUser]);
    setname('');
    setsurname('');
  }
  const deleteUsers = () => {
    setusers([]);
  }
  return (
    <View>
      <Button title='Delete' onPress={deleteUsers} />
      <Text>Length: {users.length} </Text>
      <TextInput style={styles.input} value={name} onChangeText={setname} />
      <TextInput style={styles.input} value={surname} onChangeText={setsurname} />
      <Button title='add' onPress={addUsers} />
      <View>
        <FlatList
          data={users}
          renderItem={({ item }) => <View style={{ flexDirection: 'row', gap: 10 }}>
            <Text>{item.name}</Text>
            <Text>{item.surname}</Text>
          </View>}
        />
      </View>
    </View>
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

export default StateSample4;
