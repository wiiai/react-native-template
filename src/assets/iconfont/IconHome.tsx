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

let IconHome: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M854.08768 503.1168l0 342.08768c0 44.450816-36.040704 80.490496-80.49152 80.490496L612.614144 925.694976 612.614144 664.09984c0-44.450816-36.03968-80.490496-80.490496-80.490496l-40.245248 0c-44.450816 0-80.49152 36.03968-80.49152 80.490496L411.38688 925.696 250.40384 925.696c-44.450816 0-80.490496-36.03968-80.490496-80.490496l0-342.08768L49.175552 503.117824 512 60.416l462.824448 442.701824L854.08768 503.117824z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconHome.defaultProps = {
  size: 18,
};

IconHome = React.memo ? React.memo(IconHome) : IconHome;

export default IconHome;
