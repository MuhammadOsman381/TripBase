import * as React from "react"
import Svg, { SvgProps, G, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const IpodIcon = (props: SvgProps) => (
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
        d="M16.667 19.667h2.666m-3.466 4h4.266c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874c.218-.428.218-.988.218-2.108v-6.933c0-1.12 0-1.68-.218-2.109a2 2 0 0 0-.874-.873c-.427-.218-.988-.218-2.108-.218h-4.266c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.873c-.218.428-.218.988-.218 2.108v6.934c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.428.218.988.218 2.108.218ZM20 15a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      />
    </G>
    <Defs></Defs>
  </Svg>
)
export default IpodIcon
