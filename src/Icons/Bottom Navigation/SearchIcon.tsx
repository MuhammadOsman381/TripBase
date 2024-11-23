import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const SearchIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg
      width={21}
      height={20}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props} // Allows for props like `style`, `color`, etc.
    >
      <Path
        d="M19.625 19L15.325 14.7M17.625 9C17.625 13.4183 14.0433 17 9.625 17C5.20672 17 1.625 13.4183 1.625 9C1.625 4.58172 5.20672 1 9.625 1C14.0433 1 17.625 4.58172 17.625 9Z"
        stroke="#94A3B8" // Change the color as needed
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default SearchIcon;