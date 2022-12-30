import * as React from 'react';
import {Text, View} from 'react-native';
import BPage from '@/baseUI/BPage';

export function DetailScreen() {
  return (
    <BPage title="详情">
      <View style={{ backgroundColor: '#673ab7', flex: 1 }}>
        <Text>Detail</Text>
      </View>
    </BPage>
  );
}