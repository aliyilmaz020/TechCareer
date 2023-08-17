/* eslint-disable prettier/prettier */
import { View, Text, Alert, FlatList, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setproducts] = useState([]);
  const [error, seterror] = useState('');
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {

      //func başarılıysa then içerisine düşer, hata alırsa catch içerisine düşer
      axios.get('https://northwind.vercel.app/api/products')
        .then(res => {
          setproducts(res.data);
          setloading(false);
          console.log(res.status);
        })
        // eslint-disable-next-line handle-callback-err, @typescript-eslint/no-unused-vars
        .catch(err => {
          setloading(false);
          Alert.alert('Hata meydana geldi!! ' + err.response.status);
          seterror(err);
        })
    }, 2000);
  }, []);
  return (
    <View>
      {loading && loading == true ? <ActivityIndicator size={'large'} /> :
        <FlatList
          data={products}
          renderItem={({ item }) => <Text>{item.name}</Text>} />
      }
    </View>
  );
};

export default ProductList;

// {
//   error && <Text>{error.response.status}</Text>
// }