import React, {useState, useEffect, useRef} from 'react';
import {View, FlatList, Text, StyleSheet, Animated, Easing} from 'react-native';
import LottieView from 'lottie-react-native';

const fruitsAnimation = require('@/assets/animation/bounce-fruit.json');

const fruits = [
  'Apple',
  'Orange',
  'Watermelon',
  'Avocado',
  'Blueberry',
  'Coconut',
  'Durian',
  'Mango',
  'Apple',
  'Orange',
  'Watermelon',
  'Avocado',
  'Blueberry',
  'Coconut',
  'Durian',
  'Mango',
  'Apple',
  'Orange',
  'Watermelon',
  'Avocado',
  'Blueberry',
  'Coconut',
  'Durian',
  'Mango',
];

const duration = 400;
const refreshingHeight = 60;

const styles = StyleSheet.create({
  row: {
    height: 50,
    justifyContent: 'center',
    padding: 10,
    marginHorizontal: 10,
    borderBottomWidth: 6,
    borderBottomColor: '#eee',
    backgroundColor: 'white',
  },
  rowTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export function FruitList() {
  const [offsetY, setOffsetY] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [extraPaddingTop] = useState(new Animated.Value(0));
  const lottieViewRef = useRef<LottieView>(null);

  useEffect(() => {
    if (isRefreshing) {
      Animated.timing(extraPaddingTop, {
        useNativeDriver: false,
        toValue: refreshingHeight,
        duration: 0,
      }).start();
      lottieViewRef.current?.play();
    } else {
      Animated.timing(extraPaddingTop, {
        useNativeDriver: false,
        toValue: 0,
        duration: duration,
        easing: Easing.elastic(1.3),
      }).start();
      lottieViewRef.current?.pause();
    }
  }, [isRefreshing]);

  function onRelease() {
    if (offsetY <= -refreshingHeight && !isRefreshing) {
      setIsRefreshing(true);
      setTimeout(() => {
        setIsRefreshing(false);
      }, 2000);
    }
  }

  const spinner = (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <LottieView
        ref={lottieViewRef}
        source={fruitsAnimation}
        autoPlay={false}
        style={{
          height: refreshingHeight,
        }}
      />
    </View>
  );

  let diff = -60 + Math.abs(offsetY);
  if (offsetY > 0) {
    diff = -60;
  }

  return (
    <View style={{flex: 1, paddingTop: 60}}>
      <View
        style={{
          flex: 1,
          position: 'relative',
          backgroundColor: '#eee',
          overflow: 'hidden',
        }}>
        <View
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            zIndex: 1000,
            height: 60,
            // backgroundColor: "yellow",
            top: isRefreshing ? 0 : diff
            // -60 隐藏
            // 0 展示
          }}>
          <View
            style={{
              flex: 1,
              width: '100%',
            }}>
            {spinner}
          </View>
        </View>
        <FlatList<string>
          data={fruits}
          renderItem={({ item }) => {
            return (
              <View key={item} style={styles.row}>
                <Text style={styles.rowTitle}>
                  {item}
                </Text>
              </View>
            );
          }}
          style={{flex: 1}}
          onScroll={(event) => {
            const {nativeEvent} = event;
            const {contentOffset} = nativeEvent;
            const {y} = contentOffset;
            console.log(`y: ${y}`);
            setOffsetY(y);
          }}
          onResponderRelease={onRelease}
          ListHeaderComponent={
            <Animated.View
              style={{
                paddingTop: extraPaddingTop,
              }}
            />
          }
        />
      </View>
    </View>
  );
}
