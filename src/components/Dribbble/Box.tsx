/* eslint-disable no-unreachable */
/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import { Text, Pressable, Alert } from 'react-native';
import React from 'react';

export default function Box({ backColor, text1, text2 }) {
  return (
    <Pressable onPress={() => Alert.alert('Basıldı.')} style={{ height: 110, backgroundColor: backColor, borderRadius: 20, width: 370, justifyContent: 'center' }}>
      <Text style={{ left: 20, fontSize: 25, color: '#ffffff', fontWeight: '600' }}>{text1}</Text>
      <Text style={{ left: 20, fontSize: 15, color: '#D5D7DB' }}>{text2}</Text>
    </Pressable>
  );
}
