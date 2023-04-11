/*
 * @Author: GaoXiong
 * @LastEditors: GaoXiong
 * @Date: 2023-04-11 22:58:42
 * @LastEditTime: 2023-04-11 23:20:52
 * @FilePath: /react-native-template/src/pages/fs/index.tsx
 * @Description:
 */
import * as React from 'react';
import {Text} from 'react-native';
import {observer} from 'mobx-react-lite';
import BPage from '@/baseUI/BPage';
import {Button, View} from 'native-base';
import RNFS from 'react-native-fs';

export const FsScreen = observer(() => {
  const create = () => {
    // create a path you want to write to
    // :warning: on iOS, you cannot write into `RNFS.MainBundlePath`,
    // but `RNFS.DocumentDirectoryPath` exists on both platforms and is writable
    const path = RNFS.DocumentDirectoryPath + '/test.txt';

    console.log('clicked');

    // write the file
    RNFS.writeFile(path, 'hello world', 'utf8')
      .then(() => {
        console.log('FILE WRITTEN!');
        console.log(path);
        console.log();
      })
      .catch((err: any) => {
        console.log(`Failed`);
        console.log(err.message);
      });
  };

  const download = async () => {
    const path = RNFS.DocumentDirectoryPath + '/test.jpeg'
    const res = RNFS.downloadFile({
      fromUrl: 'http://s3.airtlab.com/a5.jpeg',
      toFile:  path
    })
    const data = await res.promise;
    console.log(`write res`, data)
    console.log(`path: ${path}`)
  }

  return (
    <BPage showNavBar={true}>
      <View style={{paddingHorizontal: 12}}>
        <Button onPress={() => create()}>
          <Text style={{color: '#fff'}}>File Creation</Text>
        </Button>

        <Button style={{ marginTop: 10 }} onPress={() => download()}>
          <Text style={{color: '#fff'}}>Download Image</Text>
        </Button>
      </View>
    </BPage>
  );
});
