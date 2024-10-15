"use client";
import { ReactNode } from "react";
import SubTitleStyle from "./subTitle.style";
import { StyleProps } from "@/style/module/createStyle";

type SubTitleProps = {
  children: ReactNode;
} & StyleProps;

const SubTitle = (props: SubTitleProps) => {
  const { children } = props;

  const styleProps = SubTitleStyle.getStyleProps(props);

  return <SubTitleStyle {...styleProps}>{children}</SubTitleStyle>;
};

export default SubTitle;
