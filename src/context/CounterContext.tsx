/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React, { createContext, useState } from 'react';

export const CounterContext = createContext(null);


const CounterProvider = ({ children }) => {
  //Global State
  const [counter, setcounter] = useState(0);
  const values = {
    counter,
    setcounter
  };

  return <CounterContext.Provider value={values}>{children}</CounterContext.Provider>
};

export default CounterProvider;
