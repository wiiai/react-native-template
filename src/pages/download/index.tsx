import * as React from 'react';
import {Image, Text} from 'react-native';
import {observer} from 'mobx-react-lite';
import BPage from '@/baseUI/BPage';
import {Button, View} from 'native-base';
import RNFS from 'react-native-fs';
import Video from 'react-native-video';

const ImageDemo = () => {
  const [path, setPath] = React.useState('');

  const download = async () => {
    const path = RNFS.DocumentDirectoryPath + '/demo.jpeg';
    const res = RNFS.downloadFile({
      fromUrl: 'http://s3.airtlab.com/a5.jpeg',
      toFile: path,
    });
    const data = await res.promise;
    console.log(`write res`, data);
    console.log(`path: ${path}`);
    setPath(path);
  };

  return (
    <View>
      <View>
        <Button style={{marginTop: 10}} onPress={() => download()}>
          <Text style={{color: '#fff'}}>Download Image</Text>
        </Button>
        <Text>{path}</Text>
        {path ? (
          <Image source={{uri: path}} style={{width: 200, height: 120}}></Image>
        ) : null}
      </View>
    </View>
  );
};

const VideoDemo = () => {
  const [path, setPath] = React.useState('');
  const download = async () => {
    const path = RNFS.DocumentDirectoryPath + '/movie.mp4';
    const res = RNFS.downloadFile({
      fromUrl: 'https://www.runoob.com/try/demo_source/movie.mp4',
      toFile: path,
      begin: (res) => {
        // 开始下载时回调
        console.log('begin', Math.floor(Date.now()  / 1000), res);
      },
      progress: (res) => {
        // 下载过程中回调，根据 options 中设置progressDivider:5，则在完成5%，10%，15%，...，100%时分别回调一次，共回调20次。
        console.log('progress', Math.floor(Date.now()  / 1000), res);
      }
    });
    const data = await res.promise;
    console.log(`write res`, data);
    console.log(`path: ${path}`);
    setPath(path);
  };

  const render = () => {
    if (!path) {
      return null;
    }
    return (
      <Video source={{uri: path}} controls style={{width: 300, height: 150}} />
    );
    //  onBuffer={this.onBuffer}                // Callback when remote video is buffering
    //  onError={this.videoError}               // Callback when video cannot be loaded
    //  style={styles.backgroundVideo} />
  };

  return (
    <View>
      <Button style={{marginTop: 10}} onPress={() => download()}>
        <Text style={{color: '#fff'}}>Download Video</Text>
      </Button>
      <Text>{path}</Text>
      {render()}
    </View>
  );
};

export const DownloadScreen = observer(() => {
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

  return (
    <BPage showNavBar={true}>
      <View style={{paddingHorizontal: 12}}>
        <Button onPress={() => create()}>
          <Text style={{color: '#fff'}}>File Creation</Text>
        </Button>
        <ImageDemo />
        <VideoDemo />
      </View>
    </BPage>
  );
});
