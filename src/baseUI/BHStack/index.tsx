import React, {ReactNode} from 'react';
import {View, ViewStyle} from 'react-native';

const BHStack: React.FC<{
  between?: boolean;
  style?: ViewStyle;
  children?: ReactNode;
}> = ({children, between = true, style = {}}) => {
  const _style: ViewStyle = between
    ? {
        justifyContent: 'space-between',
      }
    : {};
  return (
    <View
      style={{flexDirection: 'row', alignItems: 'center', ..._style, ...style}}>
      {children}
    </View>
  );
};

export default BHStack;
