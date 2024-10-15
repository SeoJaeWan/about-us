"use client";
import { ReactNode } from "react";
import ContentStyle from "./content.style";
import { StyleProps } from "@/style/module/createStyle";

type ContentProps = {
  children: ReactNode;
} & StyleProps;

const Content = (props: ContentProps) => {
  const { children } = props;

  const styleProps = ContentStyle.getStyleProps(props);

  return <ContentStyle {...styleProps}>{children}</ContentStyle>;
};

export default Content;
