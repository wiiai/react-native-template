import * as React from 'react';
import {Button, Text, TouchableHighlight, TouchableWithoutFeedback, View} from 'react-native';
import {request} from '@/config/request';

export function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View>
        <Text>Home</Text>
      </View>

      <View style={{marginTop: 20}}>
        <TouchableHighlight
          onPress={() => {
            request({
              url: '/user/check_login',
            }).then(res => {
              console.log(res);
            });
          }}>
          <View style={{backgroundColor: 'blue', padding: 10}}>
            <Text style={{color: '#fff'}}>Click to request data</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}
