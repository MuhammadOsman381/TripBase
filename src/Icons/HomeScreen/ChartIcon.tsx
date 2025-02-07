import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const ChartIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props} // Allows for props like `style`, `color`, etc.
    >
      <Path
        d="M9.99999 13.3333V17.5M13.3333 11.6667V17.5M16.6667 8.33333V17.5M18.3333 2.5L11.1283 9.705C11.0896 9.7438 11.0436 9.77459 10.993 9.79559C10.9424 9.8166 10.8881 9.82741 10.8333 9.82741C10.7785 9.82741 10.7243 9.8166 10.6736 9.79559C10.623 9.77459 10.577 9.7438 10.5383 9.705L7.79499 6.96167C7.71685 6.88355 7.61089 6.83967 7.50041 6.83967C7.38992 6.83967 7.28396 6.88355 7.20582 6.96167L1.66666 12.5M3.33332 15V17.5M6.66666 11.6667V17.5"
        stroke="black"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ChartIcon;