/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import CounterProvider from './src/context/CounterContext';
import TabMain from './src/TabSample/TabMain';
import FavoritesProvider from './src/context/FavoritesContext';


export default function App(): JSX.Element {
  return <>
    <NativeBaseProvider>
      <FavoritesProvider>
        <CounterProvider>
          <TabMain />
        </CounterProvider>
      </FavoritesProvider>
    </NativeBaseProvider>

  </>

}

// const queryClient = new QueryClient();

// <QueryClientProvider client={queryClient}>
    //   <Customers />
    // </QueryClientProvider>