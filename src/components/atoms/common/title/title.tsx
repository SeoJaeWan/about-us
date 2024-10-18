"use client";
import { ReactNode } from "react";
import TitleStyle from "./title.style";
import { StyleProps } from "@/style/module/createStyle";

type TitleProps = {
  children: ReactNode;
  as?: string;
} & StyleProps;

const Title = (props: TitleProps) => {
  const { as = "h2", children } = props;

  const styleProps = TitleStyle.getStyleProps(props);

  return (
    <TitleStyle as={as} {...styleProps}>
      {children}
    </TitleStyle>
  );
};

export default Title;
