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

let IconManage: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M416.096 167.776H223.904A64 64 0 0 0 160 231.68v192.192a64 64 0 0 0 63.904 63.904h192.192A64 64 0 0 0 480 423.872V231.68a64 64 0 0 0-63.904-63.904M885.088 282.56l-135.904-135.872a64 64 0 0 0-90.368 0L640 165.504 522.912 282.56a63.456 63.456 0 0 0-18.656 45.056 63.456 63.456 0 0 0 18.656 45.312l18.816 18.816L640 490.08l18.816 18.816a63.904 63.904 0 0 0 90.368-0.032l117.088-117.12 18.816-18.784a63.936 63.936 0 0 0 0-90.368M416.096 551.776H223.904A64 64 0 0 0 160 615.68v192.192a64 64 0 0 0 63.904 63.904h192.192A64 64 0 0 0 480 807.872V615.68a64 64 0 0 0-63.904-63.904M800.096 551.776h-192.192A64 64 0 0 0 544 615.68v192.192a64 64 0 0 0 63.904 63.904h192.192A64 64 0 0 0 864 807.872V615.68a64 64 0 0 0-63.904-63.904"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconManage.defaultProps = {
  size: 18,
};

IconManage = React.memo ? React.memo(IconManage) : IconManage;

export default IconManage;
