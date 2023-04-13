/*
 * @Author: GaoXiong
 * @LastEditors: GaoXiong
 * @Date: 2023-04-11 08:40:16
 * @LastEditTime: 2023-04-13 18:45:38
 * @FilePath: /react-native-template/src/App.tsx
 * @Description:
 */

import * as React from 'react';
import {rootStore, StoreContext} from './models';
import Navigator from './navigator';
import {NativeBaseProvider} from 'native-base';
import {loadCacheUInfo} from './utils/auth';
import {View, Text} from 'react-native';
import {logger} from './utils/logger';
import { nativeTheme } from './config/theme';

export default function App() {
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    logger.info(`init application`);
    beforeBootstrap().then(() => {
      setIsLoaded(true);
    });
  }, []);

  // 在应用主框架启动之前要干的事情
  // 可以在这里配置你想干的事情
  const beforeBootstrap = async () => {
    // 从 storage 中取出数据 加载到内存中
    return await loadCacheUInfo();
  };

  if (!isLoaded) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>加载中...</Text>
      </View>
    );
  }

  return (
    <StoreContext.Provider value={rootStore}>
      <NativeBaseProvider theme={nativeTheme}>
        <Navigator />
      </NativeBaseProvider>
    </StoreContext.Provider>
  );
}
