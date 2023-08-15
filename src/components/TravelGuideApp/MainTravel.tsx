/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { View, Text, Image, TextInput, StyleSheet, ScrollView, Pressable } from 'react-native';
import React from 'react';
import MiniBox from './MiniBox';
import TripsAll from './TripsAll';
import TopBox from './TopBox';
const MainTravel = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#F7F7F7' }}>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flex: 1, marginLeft: 23, marginTop: 30 }}>
          <Text style={{ fontSize: 18, fontWeight: '400' }}>Location</Text>
          <View style={{ flexDirection: 'row', gap: 7, height: 30 }}>
            <Image style={{ height: 14.62, width: 11.92, marginTop: 5 }} source={require('../../../assets/TravelPics/Location.png')} />
            <Text style={{ fontSize: 18, fontWeight: '500', color: 'black' }}>New York, USA</Text>
          </View>
        </View>
        <Pressable style={{ marginTop: 44, marginRight: 29 }}>
          <Image style={{ width: 20, height: 24 }} source={require('../../../assets/TravelPics/Bildirim.png')} />
        </Pressable>
      </View>
      <View style={{ flex: 1, width: 400, marginTop: 15, height: 'auto', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <TextInput style={styles.input} placeholder='Search' />
        <Pressable style={{ backgroundColor: '#008FA0', width: 43, height: 45, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
          <Image style={{ width: 21, height: 21 }} source={require('../../../assets/TravelPics/Setting.png')} />
        </Pressable>
      </View>
      <TripsAll leftTitle={'Categories'} rightTitle={'See All'} />
      <ScrollView horizontal style={{ flex: 1, flexDirection: 'row', margin: 20, height: 49, marginVertical: 1 }}>
        <MiniBox image={require('../../../assets/TravelPics/Lakes.png')} title={'Lakes'} />
        <MiniBox image={require('../../../assets/TravelPics/Sea.png')} title={'Sea'} />
        <MiniBox image={require('../../../assets/TravelPics/Lakes.png')} title={'Mountain'} />
        <MiniBox image={require('../../../assets/TravelPics/Lakes.png')} title={'Forest'} />
      </ScrollView>
      <TripsAll leftTitle={'Top Trips'} rightTitle={'See All'} />
      <ScrollView horizontal style={{ flex: 1, flexDirection: 'row', margin: 20, height: 'auto', marginVertical: 1 }}>
        <TopBox image={'https://s3-alpha-sig.figma.com/img/13e3/0d5f/5ad5f5b804a2fe8aa14f652c3a75085b?Expires=1693180800&Signature=GJGnBDBzebltSsr-kFonEW5gCwf~tYoUTr5g91l7atv0A1hSx2~vGV~c3BPlJRg0YG-CRRSoY-QWnXYxdMkGrZDh9ph436b1isjO83E3gB9yQxhIEyk7snzb0mH7wSD5s7CoNuf7Uz4gunIovLj-fG964Cc-lIrZaWPlBMP5VvWCRTtSokvBF5xOyZpRWAJzL6OgQ-NeJPeh2KQm6H19NBkWouf7SYRaVXjreaBr5~fscvQ4OkgtFISVJhWWlUDzTXcrVn1IYA-KTChPicGW8kOebnD7C4CPMP8HTica4Sbow0SGWty0TBU9rQQPKw2~A5Tr2Ujxr7pnUjhjMElbhg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}
          tripsTitle={'Redfish Lake'} location={'Idaho'} />
        <TopBox image={'https://s3-alpha-sig.figma.com/img/1a63/a504/60c2301e4bf0c30d65252003c4256fec?Expires=1693180800&Signature=qvMoqu6dTVCZ~E~uMEXOwSu1tyZwWB72n7SlYsT3~7dZdjY-udhu9ElbrTFMK6lSIc0dilk1yFMfvwQisuIHdGbk8To2sTixx7sfQvQfk6DuXf-t7BhY5JaDUFVIekv9~SA49gAV-b5WjuYL8jpUHnhHMYMj4bpOk-x6-~kTIAcRRV5cV-XJugccpuAEsyFLiNVtpzeHte1zGY0FPaO7sw9a1UTDdYc~7mmryF1RzUS0m0orJdFOUZ~HqfYy3AK-xnXtfM5DTkFic9aQ76uO6X3g0Ab~xZi0NEf3JaISZbTKjOI1nC~D6Kvh5pjnhF~0G45MbJ6~hhD-HR08iIYPYQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}
          tripsTitle={'Maligne Lake'} location={'Canada'} />
        <TopBox image={'https://s3-alpha-sig.figma.com/img/855e/9558/1d96234bbeb912d48f57b1cc8257aec0?Expires=1693180800&Signature=gz~5pqI0quDmPxL6TKcZpyL-ETl0Qlqous6iWtmSXcJFoJ9MDsTxW4r104pvz96P2m5jxG1l2buZ5N9EFPNjNl6nM9Be1pP3sB-U59cMidVpZtNRX9tgHcZa0OtzPOL0EMMI~8r0vPKCfroJB0~2iUVuPcGnKIBlBuqVnzgiijzjK9GRojS1ilDTgvS5Sg-MVfVTvjSw3O47dQZWwF4BpcRUqmnduodAn4X3XMXfjx8KzScoJApnMBHyUN8JKzeJrH9ZNYAIJ4qUTIxxV0MDQg3ZgkzpHpRq19Sr0WfXd5aMWzBtZwQSFFTQrxNfe2-UwbgedG7KJxwyXX96VZTv-g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}
          tripsTitle={'Lake McDonald'} location={'Uşak'} />
      </ScrollView>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  input: {
    width: 320,
    height: 55,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    borderRadius: 30,
    borderColor: '#E9E9E9',
    backgroundColor: '#FFFFFF',
    fontSize: 18,

  },
});

export default MainTravel;
