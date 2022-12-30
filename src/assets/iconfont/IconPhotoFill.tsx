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

let IconPhotoFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M347.975 324.51875c-38.8125 0-70.284375 31.471875-70.284375 70.284375s31.471875 70.284375 70.284375 70.284375 70.284375-31.471875 70.284375-70.284375-31.471875-70.284375-70.284375-70.284375m293.878125 42.103125c-18.815625-22.021875-52.9875-21.76875-71.55 0.50625L371.346875 605.740625l-60.58125-60.58125c-18.309375-18.309375-48.009375-18.309375-66.31875 0l-60.58125 60.58125V277.60625h656.26875v320.2875l-198.28125-231.271875z m198.28125-135.84375H183.865625c-25.903125 0-46.9125 20.925-46.9125 46.9125v468.7875c0 25.903125 21.009375 46.9125 46.9125 46.9125h656.26875c25.903125 0 46.9125-21.009375 46.9125-46.9125V277.60625c-0.084375-25.903125-21.009375-46.828125-46.9125-46.828125z"
        fill={getIconColor(color, 0, '#515151')}
      />
    </Svg>
  );
};

IconPhotoFill.defaultProps = {
  size: 18,
};

IconPhotoFill = React.memo ? React.memo(IconPhotoFill) : IconPhotoFill;

export default IconPhotoFill;
