import * as React from "react"
import Svg, { SvgProps, G, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const ClockIcons = (props: SvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <G filter="url(#a)">
      <Path
        fill="#fff"
        d="M2 7a6 6 0 0 1 6-6h20a6 6 0 0 1 6 6v20a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6V7Z"
      />
      <Path
        stroke="#E4E7EC"
        d="M2.5 7A5.5 5.5 0 0 1 8 1.5h20A5.5 5.5 0 0 1 33.5 7v20a5.5 5.5 0 0 1-5.5 5.5H8A5.5 5.5 0 0 1 2.5 27V7Z"
      />
      <Path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 17a6 6 0 1 0 6-6 6.5 6.5 0 0 0-4.493 1.827L12 14.333m0 0V11m0 3.333h3.333M18 13.667V17l2.667 1.333"
      />
    </G>
    <Defs></Defs>
  </Svg>
)
export default ClockIcons
