import React from 'react';
import {
  View,
  Platform,
  ViewProps,
} from 'react-native';
import {BNavBar, IBNavBar} from './BNavBar';

const BNPage: React.FC<{ navBarOptions: IBNavBar } & ViewProps> = ({
  navBarOptions = {},
  children,
  style = {},
  ...restProps
}) => {
  const _style = {
    flex: 1,
    // backgroundColor: '#fafafa',
  };

  return (
    <View style={[_style, style]} {...restProps}>
      <BNavBar {...navBarOptions} />
      <View style={{flex: 1, width: '100%'}}>{children}</View>
    </View>
  );
};

export default BNPage;