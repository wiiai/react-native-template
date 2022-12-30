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

let IconVideoCallFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M886.690909 329.774545a43.752727 43.752727 0 0 0-13.265454 2.094546l-97.745455 29.090909a11.636364 11.636364 0 0 1-10.007273-1.861818 11.170909 11.170909 0 0 1-4.421818-9.076364 113.570909 113.570909 0 0 0-113.803636-113.105454H209.454545A113.570909 113.570909 0 0 0 94.952727 349.090909v336.290909A113.338182 113.338182 0 0 0 209.454545 798.487273h437.76a113.338182 113.338182 0 0 0 113.803637-113.105455 13.032727 13.032727 0 0 1 5.12-10.24 12.8 12.8 0 0 1 11.170909-1.861818l96.116364 28.625455A46.545455 46.545455 0 0 0 930.909091 670.952727a48.872727 48.872727 0 0 0 1.861818-13.032727V375.854545a46.545455 46.545455 0 0 0-46.08-46.08z m-309.061818 214.574546a43.52 43.52 0 0 1-14.196364 14.196364l-155.927272 98.676363a46.545455 46.545455 0 0 1-69.818182-38.865454v-197.352728a46.545455 46.545455 0 0 1 69.818182-38.865454l155.927272 98.676363a46.545455 46.545455 0 0 1 14.196364 63.534546z"
        fill={getIconColor(color, 0, '#515151')}
      />
    </Svg>
  );
};

IconVideoCallFill.defaultProps = {
  size: 18,
};

IconVideoCallFill = React.memo ? React.memo(IconVideoCallFill) : IconVideoCallFill;

export default IconVideoCallFill;
