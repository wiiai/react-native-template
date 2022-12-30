import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import WebView from 'react-native-webview';
import BPage from '@/baseUI/BPage';
import {RootStackParamList} from '@/navigator';

type IProps = NativeStackScreenProps<RootStackParamList, 'H5'>;

const H5Screen: React.FC<IProps> = ({navigation, route}) => {
  return (
    <BPage title="">
      <WebView
        style={{flex: 1}}
        source={{uri: route.params.url || 'https://www.baidu.com/'}}
      />
    </BPage>
  );
};

export default H5Screen;
