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

let IconIosArrowRoundBack: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M421.888 301.96622222c11.60533333 11.37777778 11.60533333 30.26488889 0.22755555 41.87022223L283.98933333 482.41777778h526.336c16.15644445 0 29.35466667 13.19822222 29.35466667 29.58222222s-13.19822222 29.58222222-29.35466667 29.58222222H283.98933333l138.35377778 138.58133333c11.37777778 11.60533333 11.15022222 30.26488889-0.22755556 41.87022223-11.60533333 11.37777778-30.03733333 11.37777778-41.64266666-0.22755556l-187.50577778-188.87111111c-2.50311111-2.73066667-4.55111111-5.68888889-6.144-9.32977778-1.59288889-3.64088889-2.27555555-7.50933333-2.27555556-11.37777778 0-7.73688889 2.95822222-15.01866667 8.41955556-20.70755555l187.50577778-188.87111111c11.15022222-11.83288889 29.80977778-12.06044445 41.41511111-0.68266667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconIosArrowRoundBack.defaultProps = {
  size: 18,
};

IconIosArrowRoundBack = React.memo ? React.memo(IconIosArrowRoundBack) : IconIosArrowRoundBack;

export default IconIosArrowRoundBack;
