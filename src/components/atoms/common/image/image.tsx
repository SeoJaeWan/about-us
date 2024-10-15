"use client";
import ImageStyle from "./image.style";

const Image = (props) => {
  const { src, alt } = props;
  const styleProps = ImageStyle.getStyleProps(props);

  return <ImageStyle src={src} alt={alt} {...styleProps} />;
};

export default Image;
