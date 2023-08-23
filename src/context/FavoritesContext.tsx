/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React, { createContext, useState } from 'react';

export const FavoritesContext = createContext(null);

const FavoritesProvider = ({ children }) => {
  const [favorites, setfavorites] = useState([]);
  return <FavoritesContext.Provider value={{ favorites, setfavorites }}>{children}</FavoritesContext.Provider>
};

export default FavoritesProvider;
