/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { Switch } from '@rneui/themed';
import { SpeedDial } from '@rneui/themed';
import { MD3Colors, ProgressBar, RadioButton } from 'react-native-paper';


const ProfileMainScreen = () => {
  const [open, setOpen] = useState(false);
  const [checked, setchecked] = useState('first');
  return (
    <View>
      <Text>ProfileMainScreen</Text>
      <RadioButton value={'first'} status={checked == 'first' ? 'checked' : 'unchecked'} onPress={() => setchecked('first')} />
      <RadioButton value={'second'} status={checked == 'second' ? 'checked' : 'unchecked'} onPress={() => setchecked('second')} />
      <Switch />
      <SpeedDial
        style={{ position: 'relative' }}
        isOpen={open}
        icon={{ name: 'edit', color: '#fff' }}
        openIcon={{ name: 'close', color: '#fff' }}
        onOpen={() => setOpen(!open)}
        onClose={() => setOpen(!open)}
      >
        <SpeedDial.Action
          icon={{ name: 'add', color: '#fff' }}
          title="Add"
          onPress={() => console.log('Add Something')}
        />
        <SpeedDial.Action
          icon={{ name: 'delete', color: '#fff' }}
          title="Delete"
          onPress={() => console.log('Delete Something')}
        />
      </SpeedDial>

      <ProgressBar progress={0.55} color={MD3Colors.error70} />

    </View>
  );
};

export default ProfileMainScreen;
