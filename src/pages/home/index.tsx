import * as React from 'react';
import {Button, Text, View} from 'react-native';
import { useEffect } from 'react';
import { request } from '../../config/request';

export function HomeScreen() {
  useEffect(() => {
    request({
      url: '/user/check_login',
    }).then((res) => {
      console.log(res)
    })
  })

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home</Text>
      <Button title='sss' onPress={() => {
        console.log(222)
      }} />
    </View>
  );
}