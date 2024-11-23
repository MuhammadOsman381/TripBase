import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const MagicIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg
      width={23}
      height={22}
      viewBox="0 0 23 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props} // This allows passing additional props like style or color
    >
      <Path
        d="M19.125 2.00024V6.00024M21.125 4.00024H17.125M3.125 16.0002V18.0002M4.125 17.0002H2.125M9.06194 14.5002C8.97266 14.1542 8.79228 13.8384 8.53956 13.5856C8.28684 13.3329 7.97101 13.1525 7.62494 13.0632L1.48994 11.4812C1.38527 11.4515 1.29315 11.3885 1.22755 11.3017C1.16196 11.2149 1.12646 11.1091 1.12646 11.0002C1.12646 10.8914 1.16196 10.7856 1.22755 10.6988C1.29315 10.612 1.38527 10.549 1.48994 10.5192L7.62494 8.93625C7.97089 8.84706 8.28663 8.66682 8.53934 8.41429C8.79205 8.16175 8.97251 7.84614 9.06194 7.50025L10.6439 1.36525C10.6733 1.26017 10.7363 1.16759 10.8233 1.10164C10.9102 1.0357 11.0163 1 11.1254 1C11.2346 1 11.3407 1.0357 11.4276 1.10164C11.5146 1.16759 11.5775 1.26017 11.6069 1.36525L13.1879 7.50025C13.2772 7.84632 13.4576 8.16215 13.7103 8.41487C13.963 8.66759 14.2789 8.84797 14.6249 8.93725L20.7599 10.5182C20.8654 10.5473 20.9585 10.6103 21.0248 10.6973C21.0911 10.7844 21.127 10.8908 21.127 11.0002C21.127 11.1097 21.0911 11.2161 21.0248 11.3032C20.9585 11.3902 20.8654 11.4531 20.7599 11.4822L14.6249 13.0632C14.2789 13.1525 13.963 13.3329 13.7103 13.5856C13.4576 13.8384 13.2772 14.1542 13.1879 14.5002L11.6059 20.6353C11.5765 20.7403 11.5136 20.8329 11.4266 20.8989C11.3397 20.9648 11.2336 21.0005 11.1244 21.0005C11.0153 21.0005 10.9092 20.9648 10.8223 20.8989C10.7353 20.8329 10.6723 20.7403 10.6429 20.6353L9.06194 14.5002Z"
        stroke="#94A3B8" // You can change the color here as needed
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default MagicIcon;