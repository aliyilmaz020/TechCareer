/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import { Button } from 'react-native-paper';
import { FlatList } from 'native-base';
import { FavoritesContext } from './FavoritesContext';

const FavouritesScreen = () => {
  const { favorites, setfavorites } = useContext(FavoritesContext);
  const removeFav = (item) => {
    var filteredFavourites = favorites.filter(q => q.id != item.id);
    setfavorites([...filteredFavourites]);
  }
  return <>
    <View>
      <Text>Favorites Count: {favorites.length}</Text>
      <Button onPress={() => setfavorites([])}>Remove All</Button>
      <FlatList
        data={favorites}
        renderItem={({ item }) => <>
          <Text>{item.name}</Text>
          <Button onPress={() => removeFav(item)}>Remove</Button>
        </>} />
    </View>
  </>
}

export default FavouritesScreen;
