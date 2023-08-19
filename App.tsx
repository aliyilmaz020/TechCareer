/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { View } from 'react-native';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Customers from './src/reactquerysample/Customers';

const queryClient = new QueryClient();

export default function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <Customers />
    </QueryClientProvider>
  );

}
