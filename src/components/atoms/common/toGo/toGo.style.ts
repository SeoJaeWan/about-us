import createStyle, { GetStyleProps } from "@/style/module/createStyle";
import interval from "@/style/module/styles/interval";
import { realColor } from "@/style/theme/theme";
import toRem from "@/style/utils/toRem";
import Link from "next/link";
import styled from "styled-components";

const { cssStyle, getStyleProps } = createStyle([interval]);

type ToGoStyleProps = {
  $isWhite: boolean;
};

const ToGoContainer = styled(Link)<ToGoStyleProps>`
  ${cssStyle};

  display: flex;
  align-items: center;
  gap: 5px;

  font-size: ${toRem(20)};
  font-weight: 700;

  color: ${(props) => (props.$isWhite ? realColor.white : realColor.black)};

  @media (max-width: ${(props) => props.theme.media.mobile}px) {
    font-size: ${toRem(14)};
  }

  svg {
    width: 19px;
    height: 19px;
  }

  circle {
    fill: ${(props) => (props.$isWhite ? realColor.white : realColor.black)};
  }

  path {
    stroke: ${(props) => (props.$isWhite ? realColor.black : realColor.white)};
  }
`;

type ToGoStyleType = typeof ToGoContainer & GetStyleProps;

const ToGoStyle = ToGoContainer as ToGoStyleType;

ToGoStyle.getStyleProps = getStyleProps;

export default ToGoStyle;
