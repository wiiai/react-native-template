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

let IconManageO: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M224 423.84V231.744l192-0.096 0.096 192.096L224 423.84z m192.096-256.096H223.904A64 64 0 0 0 160 231.68v192.192a64 64 0 0 0 63.904 63.904h192.192A64 64 0 0 0 480 423.84V231.68a64 64 0 0 0-63.904-63.904zM224 807.84v-192.096l192-0.096 0.096 192.096L224 807.84z m192.096-256.096H223.904A64 64 0 0 0 160 615.68v192.192a64 64 0 0 0 63.904 63.904h192.192A64 64 0 0 0 480 807.84V615.68a64 64 0 0 0-63.904-63.904zM704.064 463.616l-135.84-135.84 135.712-135.84 135.904 135.744-135.776 135.936z m181.024-181.024l-135.904-135.904a64 64 0 0 0-90.368 0L522.912 282.56a63.456 63.456 0 0 0-18.656 45.056 63.456 63.456 0 0 0 18.656 45.312l135.904 135.936a63.904 63.904 0 0 0 90.368-0.032l135.904-135.904a63.936 63.936 0 0 0 0-90.368zM608 807.84v-192.096l192-0.096 0.096 192.096-192.096 0.096z m192.096-256.096h-192.192A64 64 0 0 0 544 615.68v192.192a64 64 0 0 0 63.904 63.904h192.192A64 64 0 0 0 864 807.84V615.68a64 64 0 0 0-63.904-63.904z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconManageO.defaultProps = {
  size: 18,
};

IconManageO = React.memo ? React.memo(IconManageO) : IconManageO;

export default IconManageO;
