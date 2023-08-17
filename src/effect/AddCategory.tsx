/* eslint-disable prettier/prettier */
import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';

const AddCategory = () => {
  const [name, setname] = useState('');
  const [description, setdescription] = useState('');

  const add = () => {
    var newCategory = {
      name: name,
      description: description,
    };

    axios.post('https://northwind.vercel.app/api/categories', newCategory)
      .then(res => { Alert.alert("Yeni bir kategori eklendi.") });
  };

  return (
    <View>
      <View>
        <TextInput style={styles.input} value={name} onChangeText={setname} placeholder='Name' />
      </View>
      <View>
        <TextInput style={styles.input} value={description} onChangeText={setdescription} placeholder='Description' />
      </View>
      <View>
        <Button title='add' onPress={add} />
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

export default AddCategory;
