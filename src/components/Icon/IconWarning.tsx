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

let IconWarning: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M959.256366 512C959.256366 264.98713 759.01287 64.743634 512 64.743634 264.98713 64.743634 64.743634 264.98713 64.743634 512 64.743634 759.01287 264.98713 959.256366 512 959.256366 759.01287 959.256366 959.256366 759.01287 959.256366 512L959.256366 512 959.256366 512 959.256366 512 959.256366 512 959.256366 512ZM117.36203 512C117.36203 294.047467 294.047467 117.36203 512 117.36203 729.952533 117.36203 906.63797 294.047467 906.63797 512 906.63797 729.952533 729.952533 906.63797 512 906.63797 294.047467 906.63797 117.36203 729.952533 117.36203 512L117.36203 512 117.36203 512 117.36203 512 117.36203 512 117.36203 512Z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M484.457558 599.560299C484.457558 622.580963 495.008537 634.091122 516.110812 634.091122 537.213087 634.091122 547.764066 622.580963 547.764066 599.560299L547.764066 280.150193C547.764066 257.129529 537.213087 245.61937 516.110812 245.61937 495.008537 245.61937 484.457558 257.129529 484.457558 280.150193L484.457558 599.560299ZM478.702421 740.561158C480.62081 763.581821 493.090149 775.091981 516.110812 775.091981 539.131476 775.091981 551.600815 763.581821 553.519203 740.561158 551.600815 717.540494 539.131476 705.071155 516.110812 703.152767 493.090149 705.071155 480.62081 717.540494 478.702421 740.561158L478.702421 740.561158Z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconWarning.defaultProps = {
  size: 18,
};

IconWarning = React.memo ? React.memo(IconWarning) : IconWarning;

export default IconWarning;
