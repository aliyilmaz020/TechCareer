/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import { FavoritesContext } from '../../../context/FavoritesContext';
import { Button } from 'react-native-paper';

const ProductDetailScreen = ({ route }) => {

  const { item } = route.params;
  const { favorites, setfavorites } = useContext(FavoritesContext);

  const buttonCheck = () => {
    var isFav = favorites.find(q => q.id == item.id);
    const remove = (item) => {
      var filteredFavourites = favorites.filter(q => q.id != item.id);
      setfavorites([...filteredFavourites]);
    }
    const add = (item) => {
      setfavorites([...favorites, item])
    }
    if (isFav) {
      return <Button onPress={() => remove(item)}>Remove</Button>
    }
    else {
      return <Button onPress={() => add(item)}>Add</Button>
    }
  }
  return (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.unitPrice}</Text>
      <Text>{item.unitsInStock}</Text>
      {buttonCheck()}
    </View>
  );
};


export default ProductDetailScreen;
