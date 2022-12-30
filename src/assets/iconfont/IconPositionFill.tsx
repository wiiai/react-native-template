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

let IconPositionFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1025 1024" width={size} height={size} {...rest}>
      <Path
        d="M800.23421269 404.19032011c0-158.13027773-129.23777988-286.36608955-288.77477167-286.36608954-159.48662344 0-288.77477168 128.23581182-288.77477168 286.36608955 0 52.24808408 14.33247011 101.03514786 38.94276621 143.20867851l-0.30850576 1e-8 250.11442792 357.99336386 250.21606377-357.99336387-0.33368994 1e-8C786.00517666 505.22546797 800.23421269 456.4384042 800.23421269 404.19032011M511.48462432 547.34593203c-79.73116963 0-144.38693584-64.09182217-144.38693584-143.18079609 0-79.03770645 64.65576709-143.18079609 144.38693584-143.1807961 79.80672217 0 144.38693584 64.14308965 144.38693584 143.1807961C655.87156104 483.25410987 591.29134648 547.34593203 511.48462432 547.34593203"
        fill={getIconColor(color, 0, '#515151')}
      />
    </Svg>
  );
};

IconPositionFill.defaultProps = {
  size: 18,
};

IconPositionFill = React.memo ? React.memo(IconPositionFill) : IconPositionFill;

export default IconPositionFill;
