import { CSSProperties } from "react";

type IconProps = {
  src: string,
  width?: string,
  height?: string,
  sx?: CSSProperties
}

function CustomImage({ src, width, height, sx }: IconProps) {
  return (
    <img src={src} width={width} height={height} style={sx} />
  )
}

export default CustomImage;