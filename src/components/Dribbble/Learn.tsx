/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, SafeAreaView, Image, Pressable } from 'react-native';
import React from 'react';
import Box from './Box';

export default function Learn() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, backgroundColor: '#ffffff' }}>
        <Text style={{ left: 25, color: '#C2C9D4', fontSize: 20, fontWeight: 500 }}>Friday, 15 Dec</Text>
        <Text style={{ right: 25, color: '#C2C9D4', fontSize: 20, fontWeight: 500 }}>Search</Text>
      </View>
      <View style={{ flex: 2, backgroundColor: '#ffffff', gap: 15, marginLeft: 25, marginBottom: 50 }}>
        <Text style={{ fontSize: 45, fontWeight: 'bold', color: '#1A1D1F' }}>Learn</Text>
        <Text style={{ fontSize: 20, color: '#1A1D1F' }}>Choose the part of the body</Text>
      </View>
      <View style={{ flex: 3, alignItems: 'center', gap: 20, marginBottom: 400 }}>
        <Box backColor={'#EB7662'} text1={'Head & Face'} text2={'11 diseases'} />
        <Box backColor={'#8DC4BB'} text1={'Back & Neck'} text2={'9 diseases'} />
        <Box backColor={'#F2982F'} text1={'Elbow & Shoulders'} text2={'12 diseases'} />
        <Box backColor={'#327389'} text1={'Hand & Arm'} text2={'2 diseases'} />
      </View>
      <View style={{ flex: 1, borderBlockColor: '#F4F5F6', borderTopWidth: 2, marginBottom: 20 }}>
        <Pressable onPress={() => console.error('Bastınız.')} style={{ marginBottom: 50, alignItems: 'center' }}>
          <Image style={{ bottom: 24, width: 70, height: 55 }} source={require('../../../assets/iconLogo.png')} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
