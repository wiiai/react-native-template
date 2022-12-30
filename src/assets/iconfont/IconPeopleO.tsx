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

let IconPeopleO: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 960c-276.032 0-416-62.048-416-184.48 0-87.392 144.256-144.64 288-164l0-18.176c-86.304-60.352-128.352-165.6-128.352-320.992C255.648 121.856 349.888 32 507.744 32l8.512 0c157.888 0 252.128 89.856 252.128 240.352 0 58.432 0 231.808-127.328 321.216l-0.416 18.048c143.52 19.456 287.36 76.64 287.36 163.904C928 897.952 788.032 960 512 960zM507.744 96c-85.824 0-188.096 30.592-188.096 176.352 0 140.096 36.928 230.464 112.864 276.256C442.112 554.368 448 564.768 448 576l0 64c0 16.448-12.448 30.208-28.832 31.84C263.36 687.392 160 744.576 160 775.52 160 875.104 351.424 896 512 896c160.608 0 352-20.896 352-120.48 0-30.976-103.36-88.128-259.2-103.68-16.64-1.664-29.152-15.84-28.8-32.544l1.408-64c0.256-10.976 6.08-21.056 15.456-26.72 76.064-45.856 111.488-133.632 111.488-276.256C704.384 126.592 602.048 96 516.256 96L507.744 96z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconPeopleO.defaultProps = {
  size: 18,
};

IconPeopleO = React.memo ? React.memo(IconPeopleO) : IconPeopleO;

export default IconPeopleO;
