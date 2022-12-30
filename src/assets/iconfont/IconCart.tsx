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

let IconCart: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M363.7248 853.310464m-56.9344 0a56.9344 56.9344 0 1 0 113.8688 0 56.9344 56.9344 0 1 0-113.8688 0Z"
        fill={getIconColor(color, 0, '#323233')}
      />
      <Path
        d="M761.9584 853.310464m-56.9344 0a56.9344 56.9344 0 1 0 113.8688 0 56.9344 56.9344 0 1 0-113.8688 0Z"
        fill={getIconColor(color, 1, '#323233')}
      />
      <Path
        d="M248.2176 227.851264H887.808c5.12 0 10.1376 0.4096 15.1552 1.3312 46.3872 8.3968 77.2096 52.736 68.8128 99.1232l-61.44 341.2992c-7.2704 40.6528-42.7008 70.2464-83.968 70.2464H325.7344c-43.4176 0-79.872-32.5632-84.7872-75.5712L187.2896 195.902464c-1.6384-14.336-13.824-25.1904-28.2624-25.1904H79.2576c-15.6672 0-28.4672-12.6976-28.4672-28.4672S63.488 113.777664 79.2576 113.777664h79.7696c43.4176 0 79.872 32.5632 84.7872 75.5712 0 0.1024 4.4032 38.5024 4.4032 38.5024z"
        fill={getIconColor(color, 2, '#323233')}
      />
    </Svg>
  );
};

IconCart.defaultProps = {
  size: 18,
};

IconCart = React.memo ? React.memo(IconCart) : IconCart;

export default IconCart;
