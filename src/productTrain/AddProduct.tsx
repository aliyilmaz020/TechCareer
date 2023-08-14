/* eslint-disable prettier/prettier */
import { View, TextInput, Button, StyleSheet, Pressable, Text } from 'react-native';
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
    setname('');
    setunitPrice(0);
    setunitsInStock(0);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TextInput style={styles.input} value={name} onChangeText={setname} placeholder='Name' />
        <TextInput
          style={styles.input}
          value={unitPrice === 0 ? '' : unitPrice.toString()}
          onChangeText={(value) => setunitPrice(Number(value) || 0)}
          placeholder='Unit Price'
        />

        <TextInput
          style={styles.input}
          value={unitsInStock === 0 ? '' : unitsInStock.toString()}
          onChangeText={(value) => setunitsInStock(Number(value) || 0)}
          placeholder='Units In Stock'
        />

      </View>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Pressable style={{ borderRadius: 30, width: 90, height: 50, backgroundColor: 'blue', justifyContent: 'center' }} onPress={add}>
          <Text style={{ textAlign: 'center', fontWeight: '600', fontSize: 20 }}>Add</Text>
        </Pressable>
      </View>
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
