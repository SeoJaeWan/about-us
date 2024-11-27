import createStyle, { GetStyleProps } from "@/style/v1/module/createStyle";
import border from "@/style/v1/module/styles/border";
import display from "@/style/v1/module/styles/display";
import interval from "@/style/v1/module/styles/interval";
import size from "@/style/v1/module/styles/size";
import Image from "next/image";
import styled from "styled-components";

const { cssStyle, getStyleProps } = createStyle([
  size,
  display,
  border,
  interval,
]);

const ImageContainer = styled(Image)`
  display: block;

  ${cssStyle};
`;

type ImageStyleType = typeof ImageContainer & GetStyleProps;

const ImageStyle = ImageContainer as ImageStyleType;

ImageStyle.getStyleProps = getStyleProps;

export default ImageStyle;
