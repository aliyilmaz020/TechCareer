/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import ProductStack from './stack/ProductStack';
import ProfileStack from './stack/ProfileStack';
import CounterScreen from '../context/CounterScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FavoritesContext } from '../context/FavoritesContext';
import FavoritesScreen from '../context/FavoritesScreen';

const Tab = createBottomTabNavigator();
const TabMain = () => {
  const { favorites } = useContext(FavoritesContext);
  return (<NavigationContainer>
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Product" component={ProductStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
      <Tab.Screen name="Counter" component={CounterScreen} />
      <Tab.Screen name={"Favorites"} component={FavoritesScreen} options={{ tabBarBadge: favorites.length }} />
    </Tab.Navigator>
  </NavigationContainer>
  )
}

export default TabMain;
