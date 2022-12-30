import * as React from 'react';
import {StyleProp, Text, TextProps, TextStyle} from 'react-native';

const defaultStyle = {
  color: '#333',
  lineHeight: 20,
  fontSize: 12,
};

type ITextFontSize = 'large' | 'middle' | 'normal' | 'small' | 'mini';
const TextFontSizeMap = {
  large: 18,
  middle: 16,
  normal: 14,
  small: 12,
  mini: 10,
}

type ITextFontTheme = 'gray' | 'info' | 'second' | 'main';
const TextFontThemeMap = {
  main: '#000',
  second: '#6d6b6b',
  gray: '#888',
  info: '#72ace8',
}

const BText: React.FC<{
  type?: ITextFontTheme;
  size?: ITextFontSize;
  style?: TextStyle;
  [index: string]: any;
}> = ({type = 'main', size = 'normal', style, children, ...rest}) => {
  const _style: TextStyle = {
    ...defaultStyle,
    color: TextFontThemeMap[type],
    fontSize: TextFontSizeMap[size],
    ...style
  };

  return (
    <Text style={_style} {...rest}>
      {children}
    </Text>
  );
};

export default BText;
