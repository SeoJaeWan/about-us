import createStyle, { GetStyleProps } from "@/style/module/createStyle";
import display from "@/style/module/styles/display";
import interval from "@/style/module/styles/interval";
import size from "@/style/module/styles/size";
import Image from "next/image";
import styled from "styled-components";

const { cssStyle, getStyleProps } = createStyle([size, display, interval]);

const ImageContainer = styled(Image)`
  display: block;

  ${cssStyle};
`;

type ImageStyleType = typeof ImageContainer & GetStyleProps;

const ImageStyle = ImageContainer as ImageStyleType;

ImageStyle.getStyleProps = getStyleProps;

export default ImageStyle;
