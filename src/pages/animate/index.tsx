import React, {useEffect, useRef} from 'react';
import Lottie from 'lottie-react-native';
import BPage from '@/baseUI/BPage';
import {Button, View, Spacer} from 'native-base';

export default function AnimateScreen() {
  const animationRef = useRef<Lottie>(null);

  useEffect(() => {
    animationRef.current?.play();
    // Or set a specific startFrame and endFrame with:
    // animationRef.current?.play(30, 120);
  }, []);

  return (
    <BPage title="lottie 动画">
      <View style={{paddingHorizontal: 12}}>
        <Button
          onPress={() => {
            console.log(`click stop`);
            animationRef.current?.pause();
          }}>
          stop
        </Button>

        <Button
          style={{marginTop: 10}}
          onPress={() => {
            console.log(`click resume`);
            animationRef.current?.resume();
          }}>
          resume
        </Button>

        <Button
          style={{marginTop: 10}}
          onPress={() => {
            console.log(`click play`);
            animationRef.current?.play();
          }}>
          play
        </Button>
      </View>

      <View style={{flex: 1}}>
        <Lottie
          ref={animationRef}
          source={require('@/assets/animation/ani.json')}
        />
      </View>
    </BPage>
  );
}
