/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/navigation/intro/HomeScreen';
import ProfileScreen from './src/navigation/intro/ProfileScreen';
import ContactScreen from './src/navigation/intro/ContactScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartStackScreen from './src/navigation/tab-stack/CartStackScreen';
import HomeStackScreen from './src/navigation/tab-stack/HomeStackScreen';
import ProfileStackScreen from './src/navigation/tab-stack/ProfileStackScreen';

const Tab = createBottomTabNavigator();

export default function App(): JSX.Element {
  return <>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={HomeStackScreen} options={{ headerShown: false }} />
        <Tab.Screen name='Profile' component={ProfileStackScreen} />
        <Tab.Screen name='Cart' component={CartStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  </>

}

// const queryClient = new QueryClient();

// <QueryClientProvider client={queryClient}>
    //   <Customers />
    // </QueryClientProvider>