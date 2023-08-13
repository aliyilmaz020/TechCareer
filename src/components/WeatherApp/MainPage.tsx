/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import { Image, Text, View, ScrollView } from 'react-native';
import React from 'react';
import WeatherState from './WeatherState';
import Bulut from '../../../assets/Bulut.png';
import House from '../../../assets/House.png';
import Rain from '../../../assets/Rain.png';


const MainPage = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#362A84' }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image style={{ width: 244, height: 244 }} source={Bulut} />
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', bottom: 23 }}>
        <Text style={{ fontSize: 64, color: '#ffffff', fontWeight: '500' }}>19°</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', bottom: 28 }}>
        <Text style={{ color: '#ffffff', textAlign: 'center', fontSize: 24, fontWeight: '400' }}>Precipitations{'\n'}Max: 24°&nbsp;&nbsp;Min:18°</Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', top: 10, paddingLeft: 33, paddingRight: 59 }}>
        <Image style={{ width: 336, height: 198 }} source={House} />
      </View>
      <View style={{ flex: 1, backgroundColor: '#653d9c', width: 412, height: 260, borderTopRightRadius: 30, borderTopLeftRadius: 30 }}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ left: 56, top: 19, color: '#ffffff', fontSize: 20, width: 78, height: 32 }}>Today</Text>
          <Text style={{ right: 39, top: 19, color: '#ffffff', fontSize: 20, width: 78, height: 32 }}>July, 21</Text></View>
        <View style={{ borderBottomWidth: 1, borderBottomColor: '#ffffff', width: '100%', position: 'absolute', bottom: 190 }} />
        <View style={{ flex: 1, flexDirection: 'row', right: 20, left: 30, bottom: 37 }}>
          <WeatherState celsius={'19°C'} image={Rain} time={'15.00'} imgWidth={60} imgHeight={60} />
          <WeatherState celsius={'22°C'} image={Rain} time={'19.00'} imgWidth={60} imgHeight={60} />
          <WeatherState celsius={'34°C'} image={Rain} time={'12.00'} imgWidth={60} imgHeight={60} />
          <WeatherState celsius={'34°C'} image={Rain} time={'12.00'} imgWidth={60} imgHeight={60} />
        </View>
      </View>


    </ScrollView>
  );
};

export default MainPage;
