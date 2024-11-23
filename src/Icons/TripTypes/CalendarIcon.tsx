import * as React from "react"
import Svg, { SvgProps, G, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const CalendarIcon = (props: SvgProps) => (
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
        stroke="#64748B"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.333 10.334V13m5.334-2.666V13M12 15.667h12m-8.667 2.667h.007m2.66 0h.007m2.66 0h.006M15.333 21h.007M18 21h.007m2.66 0h.006m-7.34-9.333h9.334c.736 0 1.333.597 1.333 1.333v9.334c0 .736-.597 1.333-1.333 1.333h-9.334A1.333 1.333 0 0 1 12 22.333V13c0-.736.597-1.333 1.333-1.333Z"
      />
    </G>
    <Defs></Defs>
  </Svg>
)
export default CalendarIcon
