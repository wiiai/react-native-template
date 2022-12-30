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

let IconPeople: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M640.64 612.32l0.416-18.016c85.664-59.872 127.328-165.312 127.328-321.6C768.384 121.984 674.112 32 516.256 32l-8.512 0c-157.856 0-252.096 89.984-252.096 240.672 0 155.616 42.016 260.992 128.352 321.344l0 18.176c-143.744 19.36-288 76.608-288 164 0 122.4 139.968 184.48 416 184.48s416-62.048 416-184.48C928 688.928 784.16 631.776 640.64 612.32z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconPeople.defaultProps = {
  size: 18,
};

IconPeople = React.memo ? React.memo(IconPeople) : IconPeople;

export default IconPeople;
