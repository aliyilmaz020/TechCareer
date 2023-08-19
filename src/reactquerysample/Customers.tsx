/* eslint-disable prettier/prettier */
import { View, Text, SafeAreaView, ActivityIndicator, FlatList } from 'react-native';
import React from 'react';
import { useQuery } from 'react-query';

const Customers = () => {
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('https://northwind.vercel.app/api/customers').then(res =>
      res.json()),
    {
      staleTime: 10000,
    }
  );


  return (
    <>
      <SafeAreaView>
        {
          isLoading == true ? <ActivityIndicator /> :
            <FlatList
              data={data}
              renderItem={({ item }) => <Text>{item.companyName}</Text>} />
        }
      </SafeAreaView>
    </>
  );
};

export default Customers;

