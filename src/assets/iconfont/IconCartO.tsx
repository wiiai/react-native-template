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

let IconCartO: FunctionComponent<Props> = ({ size, color, ...rest }) => {
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
        d="M254.7712 284.785664l42.8032 372.9408c1.6384 14.336 13.824 25.1904 28.2624 25.1904H826.368c13.7216 0 25.6-9.8304 27.9552-23.4496l61.44-341.2992c2.7648-15.4624-7.4752-30.208-22.9376-33.0752-1.6384-0.3072-3.3792-0.4096-5.0176-0.4096l-633.0368 0.1024z m-6.5536-56.9344H887.808c5.12 0 10.1376 0.4096 15.1552 1.3312 46.3872 8.3968 77.2096 52.736 68.8128 99.1232l-61.44 341.2992c-7.2704 40.6528-42.7008 70.2464-83.968 70.2464H325.7344c-43.4176 0-79.872-32.5632-84.7872-75.5712L187.2896 195.902464c-1.6384-14.336-13.824-25.1904-28.2624-25.1904H79.2576c-15.6672 0-28.4672-12.6976-28.4672-28.4672S63.488 113.777664 79.2576 113.777664h79.7696c43.4176 0 79.872 32.5632 84.7872 75.5712 0 0.1024 4.4032 38.5024 4.4032 38.5024z"
        fill={getIconColor(color, 2, '#323233')}
      />
    </Svg>
  );
};

IconCartO.defaultProps = {
  size: 18,
};

IconCartO = React.memo ? React.memo(IconCartO) : IconCartO;

export default IconCartO;
