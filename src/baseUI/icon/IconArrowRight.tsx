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

let IconArrowRight: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M739.56256765 512.17674763a44.18690634 44.18690634 0 0 1-13.78631478 32.079694l-366.75132261 346.95558856a44.18690634 44.18690634 0 0 1-60.71280931-64.24776182l332.90415234-314.87589456L298.31212095 196.94735781a44.27528016 44.27528016 0 0 1-1.76747625-62.48028556c16.79102442-17.67476253 44.80552302-18.47012684 62.48028556-1.76747625l366.75132261 347.30908382a44.18690634 44.18690634 0 0 1 13.78631478 32.16806781z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconArrowRight.defaultProps = {
  size: 18,
};

IconArrowRight = React.memo ? React.memo(IconArrowRight) : IconArrowRight;

export default IconArrowRight;
