"use client";
import React, { forwardRef } from "react";
import ImageStyle from "./image.style";
import { StaticImageData } from "next/image";

interface ImageProps extends Omit<React.HTMLProps<HTMLImageElement>, "src"> {
  src: StaticImageData | string;
  width: string | number;
  height: string | number;
  className?: string;
  alt: string;
}

const Image = forwardRef<HTMLImageElement, ImageProps>((props, ref) => {
  const { src, width, height, className, alt } = props;
  const styleProps = ImageStyle.getStyleProps(props);

  return (
    <ImageStyle
      ref={ref}
      src={src}
      alt={alt}
      className={className}
      {...styleProps}
      width={width}
      height={height}
    />
  );
});

export default Image;
