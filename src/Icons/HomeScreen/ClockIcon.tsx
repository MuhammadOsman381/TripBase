import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const ClockIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg
      width={17}
      height={16}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props} // Allows for props like `style`, `color`, etc.
    >
      <Path
        d="M8.49998 4.00016V8.00016L11.1666 9.3335M15.1666 8.00016C15.1666 11.6821 12.1819 14.6668 8.49998 14.6668C4.81808 14.6668 1.83331 11.6821 1.83331 8.00016C1.83331 4.31826 4.81808 1.3335 8.49998 1.3335C12.1819 1.3335 15.1666 4.31826 15.1666 8.00016Z"
        stroke="#D0D5DD"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ClockIcon;