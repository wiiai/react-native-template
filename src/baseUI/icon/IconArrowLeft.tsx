/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let IconArrowLeft: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M388.34631147 498.98382187l292.54542186 280.89457813a40.04977813 40.04977813 0 0 1 0 58.11768853 44.0547552 44.0547552 0 0 1-60.52977813 0l-322.7648-309.93066666a40.04977813 40.04977813 0 0 1 0-58.1632l322.81031147-309.93066667a44.0547552 44.0547552 0 0 1 60.48426666 0 40.04977813 40.04977813 0 0 1 0 58.07217813l-292.54542186 280.94008854z"
        fill={getIconColor(color, 0, '#666666')}
      />
    </Svg>
  );
};

IconArrowLeft.defaultProps = {
  size: 18,
};

IconArrowLeft = React.memo ? React.memo(IconArrowLeft) : IconArrowLeft;

export default IconArrowLeft;
