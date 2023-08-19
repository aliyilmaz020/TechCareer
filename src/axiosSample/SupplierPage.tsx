/* eslint-disable prettier/prettier */
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { axiosInstance } from './axiosInstance';
const SupplierPage = () => {
  const [suppliers, setsuppliers] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      axiosInstance.get('/api/suppliers')
        .then(res => {
          setsuppliers(res.data);
          console.log(res.status);
          setloading(false);
        })
        .catch(err => {
          setloading(false);
          console.log("Error", err);
        });

    }, 2000);


  }, []);

  var renderitem = ({ item }) => <Text>{item.companyName}</Text>;
  return (
    <View>
      {
        loading ? <ActivityIndicator size="large" color="#00ff00" /> : <FlatList
          data={suppliers}
          renderItem={renderitem}
        />
      }
    </View>
  );
};

export default SupplierPage;



// var data = baseService.getAll();
      // setsuppliers(data);