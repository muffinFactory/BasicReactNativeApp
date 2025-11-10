import Svg, { SvgProps, Circle, G, Ellipse } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */
const LogoIcon = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    viewBox="-11.5 -10.232 23 20.463"
    {...props}
  >
    <Circle r={2.05} fill="#61dafb" />
    <G fill="none" stroke="#61dafb">
      <Ellipse rx={11} ry={4.2} />
      <Ellipse rx={11} ry={4.2} transform="rotate(60)" />
      <Ellipse rx={11} ry={4.2} transform="rotate(120)" />
    </G>
  </Svg>
)
export default LogoIcon
