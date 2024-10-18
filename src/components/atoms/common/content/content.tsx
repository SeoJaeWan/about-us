"use client";
import { ReactNode } from "react";
import ContentStyle from "./content.style";
import { StyleProps } from "@/style/module/createStyle";

type ContentProps = {
  children: ReactNode;
  isClamp?: boolean;
  clamp?: number;
} & StyleProps;

const Content = (props: ContentProps) => {
  const { children, isClamp, clamp } = props;

  const styleProps = ContentStyle.getStyleProps(props);

  return (
    <ContentStyle {...styleProps} $isClamp={isClamp} $clamp={clamp}>
      {children}
    </ContentStyle>
  );
};

export default Content;
