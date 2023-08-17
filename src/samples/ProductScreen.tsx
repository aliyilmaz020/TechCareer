/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React from 'react';
import ProductTitle from './ProductTitle';
import ProductList from './ProductList';

const ProductScreen = () => {
  return (
    <>
      <ProductTitle />
      <ProductList />
    </>
  );
};

export default ProductScreen;
