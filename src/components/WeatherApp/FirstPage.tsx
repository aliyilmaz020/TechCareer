/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Image, Text, View, Pressable, SafeAreaView } from 'react-native';
import Bulut from '../../../assets/Bulut.png';

const FirstPage = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#362A84' }}>
      <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
        <Image style={{ width: 428, height: 428 }} source={Bulut} />
      </View>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: '#fff', textAlign: 'center', fontSize: 64, fontWeight: '700' }}>Weather</Text>
        <Text style={{ color: '#DDB130', fontSize: 64, fontWeight: '500' }}>ForeCasts</Text>
      </View>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', bottom: 27 }}>
        <Pressable onPress={() => console.warn('Basıldı')} style={{ borderRadius: 50, backgroundColor: '#DDB130', width: 304, height: 72, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 28, color: '#362A84', fontWeight: '700' }}>Get Start</Text>
        </Pressable>

      </View>
    </SafeAreaView >
  );
};
export default FirstPage;
