"use client";
import { forwardRef, ReactNode } from "react";
import TitleStyle from "./title.style";
import { StyleProps } from "@/style/module/createStyle";

type TitleProps = {
  children: ReactNode;
  as?: string;
  className?: string;
} & StyleProps;

const Title = forwardRef((props: TitleProps, ref) => {
  const { as = "h2", children, className } = props;

  const styleProps = TitleStyle.getStyleProps(props);

  return (
    <TitleStyle ref={ref} as={as} className={className} {...styleProps}>
      {children}
    </TitleStyle>
  );
});

export default Title;
