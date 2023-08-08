import React, {useState, useEffect, useRef} from 'react';
import {Text, View, FlatList, Animated, Easing} from 'react-native';
import LottieView from 'lottie-react-native';

const fruitsAnimation = require('@/assets/animation/bounce-fruit.json');

const duration = 400;
const refreshingHeight = 60;

interface BListProps<Item> {
  onLoad: (finish: Function) => void;
  onRefresh: (finish: Function) => void;
  dataSource: Item[];
  renderItem: (data: {item: Item}) => React.ReactElement;
  footerLoading?: (isLoading: boolean) => React.ReactElement | null;
  disableLoadMore?: boolean;
  bottomDistance?: number;
}

export const getSimpleFooterLoading = (isLoading: boolean) =>
  isLoading ? (
    <View
      style={{
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: '#888'}}>Loading...</Text>
    </View>
  ) : null;

export function BList<Item>(props: BListProps<Item>) {
  const flatRef = useRef<FlatList>(null);
  const lottieViewRef = useRef<LottieView>(null);

  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [extraPaddingTop] = useState(new Animated.Value(0));

  const [offsetY, setOffsetY] = useState(0);
  const [flatHeight, setFlatHeight] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);

  const bottomDistance = props.bottomDistance || 40;

  useEffect(() => {
    setIsRefreshing(true);
    props.onRefresh(() => {
      setIsRefreshing(false);
    });
  }, []);

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
    console.log(`scroll`, offsetY + 10 + flatHeight, contentHeight);
    if (offsetY <= -refreshingHeight && !isRefreshing && !isLoading) {
      console.log(`reach refresh`);
      setIsRefreshing(true);
      props.onRefresh(() => {
        setIsRefreshing(false);
      });
    } else if (
      !props.disableLoadMore &&
      offsetY + bottomDistance + flatHeight > contentHeight &&
      !isRefreshing &&
      !isLoading
    ) {
      console.log(`reach bottom`);
      setIsLoading(true);
      props.onLoad(() => {
        setIsLoading(false);
      });
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
          top: isRefreshing ? 0 : diff,
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
      <FlatList<Item>
        data={props.dataSource}
        renderItem={props.renderItem}
        style={{flex: 1}}
        ref={flatRef}
        onLayout={e => {
          if (e.nativeEvent.layout) {
            setFlatHeight(e.nativeEvent.layout.height);
          }
        }}
        onScroll={event => {
          const {nativeEvent} = event;
          const {contentOffset, contentSize} = nativeEvent;
          const {y} = contentOffset;
          setContentHeight(contentSize.height);
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
        ListFooterComponent={props.footerLoading?.(isLoading)}
      />
    </View>
  );
}
