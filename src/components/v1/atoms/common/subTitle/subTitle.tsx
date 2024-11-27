"use client";
import { forwardRef, ReactNode } from "react";
import SubTitleStyle from "./subTitle.style";
import { StyleProps } from "@/style/v1/module/createStyle";

type SubTitleProps = {
  children: ReactNode;
} & StyleProps;

const SubTitle = forwardRef((props: SubTitleProps, ref) => {
  const { children } = props;

  const styleProps = SubTitleStyle.getStyleProps(props);

  return (
    <SubTitleStyle {...styleProps} ref={ref}>
      {children}
    </SubTitleStyle>
  );
});

export default SubTitle;
