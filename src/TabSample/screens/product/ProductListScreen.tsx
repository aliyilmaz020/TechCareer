/* eslint-disable prettier/prettier */
import { View, Text, FlatList, Pressable } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Button, List } from 'react-native-paper';
import { FavoritesContext } from '../../../context/FavoritesContext';

const ProductListScreen = ({ navigation }) => {
  const [products, setproducts] = useState([]);
  const { favorites, setfavorites } = useContext(FavoritesContext);

  useEffect(() => {
    axios.get('https://northwind.vercel.app/api/products/')
      .then(res => {
        setproducts(res.data);
      });
  }, []);

  const goToDetail = (item) => {
    navigation.navigate('ProductDetail', { item: item });
  }
  const addFav = (item) => {
    setfavorites([...favorites, item]);
  }
  const removeFav = (item) => {
    var filteredFavourites = favorites.filter(q => q.id != item.id);
    setfavorites([...filteredFavourites]);
  }
  const renderItem = ({ item }) => {
    var isFav = favorites.find(q => q.id == item.id);
    return <>
      <Pressable onPress={() => goToDetail(item)}>
        <List.Item
          title={item.name}
          left={props => <List.Icon {...props} icon="folder" />}
        />
      </Pressable>
      {
        isFav ? <Button onPress={() => removeFav(item)}>Remove to Fav</Button> : <Button onPress={() => addFav(item)}>Add to Fav</Button>
      }
    </>
  }

  return (
    <>
      <FlatList
        data={products}
        renderItem={renderItem}
      />
    </>
  );
};


export default ProductListScreen;
