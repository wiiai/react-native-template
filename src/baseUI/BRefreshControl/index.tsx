import React from 'react';
import {RefreshControl, RefreshControlProps} from 'react-native';
import Theme from '@/utils/theme';

const BRefreshControl: React.FC<RefreshControlProps> = props => {
  return (
    <RefreshControl
      tintColor={Theme.indictorColor}
      colors={[Theme.indictorColor]}
      {...props}
    />
  );
};

export default BRefreshControl;