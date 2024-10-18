"use client";
import ImageStyle from "./image.style";

const Image = (props) => {
  const { src, width, height, alt } = props;
  const styleProps = ImageStyle.getStyleProps(props);

  return (
    <ImageStyle
      src={src}
      alt={alt}
      {...styleProps}
      width={width}
      height={height}
    />
  );
};

export default Image;
