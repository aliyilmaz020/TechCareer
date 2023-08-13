/* eslint-disable prettier/prettier */
import { View, Text, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    axios.get('https://northwind.vercel.app/api/products')
      .then(res => setproducts(res.data));
  }, []);

  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => (item.unitPrice > 50) ? <Text style={{ backgroundColor: 'red', fontSize: 20, fontWeight: '400' }}>{item.name} - {item.unitPrice}</Text> :
          <Text style={{ fontSize: 20, fontWeight: '400' }}>{item.name} - {item.unitPrice}</Text>} />
    </View>
  );
};

export default ProductList;
