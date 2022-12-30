import * as React from 'react';
import {View, ViewStyle} from 'react-native';

const BLine: React.FC<{
  style?: ViewStyle;
  children?: React.ReactNode;
}> = props => {
  const style = {
    height: 1,
    backgroundColor: '#f5f5f5',
    ...props.style,
  };

  return <View style={style}>{props.children}</View>;
};

export default BLine;