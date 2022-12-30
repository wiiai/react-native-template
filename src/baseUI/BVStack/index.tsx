import React from 'react';
import {View, ViewStyle} from 'react-native';

const BVStack: React.FC<{
  between?: boolean;
  style?: ViewStyle;
}> = ({children, between = true, style = {}}) => {
  const _style: ViewStyle = between
    ? {
        justifyContent: 'space-between',
      }
    : {};
  return (
    <View
      style={{ ..._style, ...style}}>
      {children}
    </View>
  );
};

export default BVStack;
