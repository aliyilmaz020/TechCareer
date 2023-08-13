/* eslint-disable prettier/prettier */

import { View, Text } from 'react-native';
import React from 'react';

export default function IfElseSample() {
  var onlineStatus = false;

  return <View>
    {
      onlineStatus == true ? <Text>User Online</Text> :
        <Text>User Offline</Text>
    }
  </View>
}
