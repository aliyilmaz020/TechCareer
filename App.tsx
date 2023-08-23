/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductStack from './src/TabSample/stack/ProductStack';
import ProfileStack from './src/TabSample/stack/ProfileStack';
import CounterProvider, { CounterContext } from './src/context/CounterContext';
import CounterScreen from './src/context/CounterScreen';

const Tab = createBottomTabNavigator();

export default function App(): JSX.Element {
  return <>
    <CounterProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Product" component={ProductStack} />
          <Tab.Screen name="Profile" component={ProfileStack} />
          <Tab.Screen name="Counter" component={CounterScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </CounterProvider>



  </>

}

// const queryClient = new QueryClient();

// <QueryClientProvider client={queryClient}>
    //   <Customers />
    // </QueryClientProvider>