/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/navigation/intro/HomeScreen';
import ProfileScreen from './src/navigation/intro/ProfileScreen';
import ContactScreen from './src/navigation/intro/ContactScreen';

const Stack = createNativeStackNavigator();

export default function App(): JSX.Element {
  return <>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Ana Sayfa',
            headerTitleAlign: 'center',
            headerShown: false, //title gizleme



          }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </>

}

// const queryClient = new QueryClient();

// <QueryClientProvider client={queryClient}>
    //   <Customers />
    // </QueryClientProvider>