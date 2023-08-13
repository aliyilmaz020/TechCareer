/* eslint-disable no-unreachable */
/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, ScrollView, Image, Pressable } from 'react-native'
import React from 'react'

export default function Main1() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: 411, height: 250, top: 24, backgroundColor: '#ffffff', gap: 12 }}>
        <Text style={{ fontSize: 45, fontWeight: '600', textAlign: 'center', color: 'black' }}>Welcome{'\n'}to MyoMus!</Text>
        <Text style={{ color: '#C2C9D3', fontSize: 23, fontWeight: '400' }}>Hope you are well today</Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('../../../assets/Guitar.png')}
          style={{ height: 370, width: 300 }}
        />
      </View>
      <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center', gap: 12, marginTop: 35 }}>
        <Pressable style={{ flex: 1, backgroundColor: '#F2982F', borderRadius: 20, width: 350, height: 60, justifyContent: 'center', alignItems: 'center' }} >
          <Text style={{ fontSize: 18, color: '#ffffff', fontWeight: '600' }}>Login</Text>
        </Pressable>
        <Pressable style={{ flex: 1, backgroundColor: '#F4F5F6', borderRadius: 20, width: 350, height: 60, justifyContent: 'center', alignItems: 'center' }} >
          <Text style={{ fontSize: 18, color: 'black', fontWeight: '600' }}>Continue with e-mail</Text>
        </Pressable>
      </View >
    </ScrollView >
  );
}
