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

let IconFile: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M760.1096983 350.21451664L604.26262569 194.36744404c-4.34517861-4.34517861-10.21116973-6.80744649-16.36683941-6.80744648H280.25714112c-12.81827689 0-23.17428589 10.35600901-23.17428589 23.17428589v602.5314331c0 12.81827689 10.35600901 23.17428589 23.17428589 23.17428589h463.48571776c12.81827689 0 23.17428589-10.35600901 23.17428589-23.17428589V366.65377569c0-6.15566969-2.46226788-12.09408045-6.80744647-16.43925905zM713.47144795 377.29946327H577.17767906V241.00569439L713.47144795 377.29946327z m1.30355358 406.99839593H309.22499847V239.7021408h218.70732308v156.42642975c0 16.80135728 13.61489296 30.41625023 30.41625023 30.41625023h156.42642975v357.75303842z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconFile.defaultProps = {
  size: 18,
};

IconFile = React.memo ? React.memo(IconFile) : IconFile;

export default IconFile;
