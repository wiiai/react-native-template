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

let IconFile1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M599.29153429 381.06269857V220.11893174q7.5016165 4.77375579 12.27537227 9.54751158l139.12088298 139.12088295q4.77375579 4.77375579 9.54751158 12.27537229h-160.94376684z m-43.64576714 10.91144164q0 13.63930235 9.54751159 23.18681391t23.18681391 9.54751159h185.49451081v360.07757939q0 13.63930235-9.54751158 23.18681393t-23.18681393 9.54751157H282.85972205q-13.63930235 0-23.18681392-9.54751157t-9.54751159-23.18681393V239.2139549q0-13.63930235 9.54751158-23.18681392t23.18681393-9.54751158h272.7860451v185.49451081z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconFile1.defaultProps = {
  size: 18,
};

IconFile1 = React.memo ? React.memo(IconFile1) : IconFile1;

export default IconFile1;
