import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const CalendarIcon: React.FC<SvgProps> = (props) => {
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
        d="M14.5 6.66683H2.5M11.1667 1.3335V4.00016M5.83333 1.3335V4.00016M7.5 9.3335L8.5 8.66683V12.0002M7.66667 12.0002H9.33333M5.7 14.6668H11.3C12.4201 14.6668 12.9802 14.6668 13.408 14.4488C13.7843 14.2571 14.0903 13.9511 14.282 13.5748C14.5 13.147 14.5 12.5869 14.5 11.4668V5.86683C14.5 4.74672 14.5 4.18667 14.282 3.75885C14.0903 3.38252 13.7843 3.07656 13.408 2.88482C12.9802 2.66683 12.4201 2.66683 11.3 2.66683H5.7C4.5799 2.66683 4.01984 2.66683 3.59202 2.88482C3.21569 3.07656 2.90973 3.38252 2.71799 3.75885C2.5 4.18667 2.5 4.74672 2.5 5.86683V11.4668C2.5 12.5869 2.5 13.147 2.71799 13.5748C2.90973 13.9511 3.21569 14.2571 3.59202 14.4488C4.01984 14.6668 4.5799 14.6668 5.7 14.6668Z"
        stroke="#D0D5DD"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default CalendarIcon;