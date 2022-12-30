import React from 'react';
import {View, StatusBar, ViewProps} from 'react-native';
import {BNavBar, IBNavBar} from './BNavBar';

const BPage: React.FC<ViewProps & IBNavBar> = ({
  showBack = true,
  showNavBar = true,
  useTopInsert = true,
  navRight,
  navLeft,
  title,
  children,
  style = {},
  topInsertBgColor,
  ...restProps
}) => {
  const _style = {
    flex: 1,
    backgroundColor: '#fafafa',
  };

  const navBarProps: IBNavBar = {
    showBack,
    showNavBar,
    useTopInsert,
    navRight,
    navLeft,
    title,
    topInsertBgColor
  };

  return (
    <View style={[_style, style]} {...restProps}>
      <StatusBar
        translucent={true}
        barStyle={'dark-content'}
        backgroundColor="transparent"
      />
      <BNavBar {...navBarProps} />
      <View style={{flex: 1, width: '100%' }}>{children}</View>
    </View>
  );
};

export default BPage;