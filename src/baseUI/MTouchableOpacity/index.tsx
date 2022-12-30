import React from 'react';
import {Touchable, TouchableOpacity, TouchableOpacityProps} from 'react-native';

const MTouchableOpacity: React.FC<TouchableOpacityProps> = ({
  children,
  ...rest
}) => {
  return <TouchableOpacity {...rest}>{children}</TouchableOpacity>;
};

export default MTouchableOpacity;