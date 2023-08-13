/* eslint-disable prettier/prettier */
import { View, TextInput, Button, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const [name, setname] = useState('');
  const [unitPrice, setunitPrice] = useState<number>(0);
  const [unitsInStock, setunitsInStock] = useState<number>(0);

  const add = () => {
    var newProduct = {
      name: name,
      unitPrice: unitPrice,
      unitsInStock: unitsInStock,
    };
    axios.post('https://northwind.vercel.app/api/products', newProduct);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View>
        <TextInput style={styles.input} value={name} onChangeText={setname} />
        <TextInput
          style={styles.input}
          value={unitPrice.toString()}
          onChangeText={(value) => setunitPrice(Number(value))}
        />
        <TextInput
          style={styles.input}
          value={unitsInStock.toString()}
          onChangeText={(value) => setunitsInStock(Number(value))}
        />
      </View>
      <Button title='add' onPress={add} />
    </View>
  );
};


const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 30,
  },
});
export default AddProduct;
