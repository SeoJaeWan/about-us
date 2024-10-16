import createStyle, { GetStyleProps } from "@/style/module/createStyle";
import interval from "@/style/module/styles/interval";
import { realColor } from "@/style/theme/theme";
import toRem from "@/style/utils/toRem";
import Link from "next/link";
import styled from "styled-components";

const { cssStyle, getStyleProps } = createStyle([interval]);

const ToGoContainer = styled(Link)`
  ${cssStyle};

  display: flex;
  align-items: center;
  gap: 5px;

  font-size: ${toRem(20)};
  font-weight: 700;

  color: ${realColor.black};
`;

type ToGoStyleType = typeof ToGoContainer & GetStyleProps;

const ToGoStyle = ToGoContainer as ToGoStyleType;

ToGoStyle.getStyleProps = getStyleProps;

export default ToGoStyle;
