/* eslint-disable prettier/prettier */
import { View, Text, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EffectSample = () => {
  const [categories, setcategories] = useState([]);
  //useEffect hook eğer boş bir dizi ile bağlıysa sadece bir kere çalışır
  useEffect(() => {
    axios.get('https://northwind.vercel.app/api/categories')
      .then(res => setcategories(res.data));

  }, []);


  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <FlatList
        data={categories}
        renderItem={({ item }) => <Text>{item.name}</Text>} />
    </View>
  );
};

export default EffectSample;
