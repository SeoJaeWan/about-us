"use client";
import { ReactNode } from "react";
import TitleStyle from "./title.style";
import { StyleProps } from "@/style/module/createStyle";

type TitleProps = {
  children: ReactNode;
} & StyleProps;

const Title = (props: TitleProps) => {
  const { children } = props;

  const styleProps = TitleStyle.getStyleProps(props);

  return <TitleStyle {...styleProps}>{children}</TitleStyle>;
};

export default Title;
