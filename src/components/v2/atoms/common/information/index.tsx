"use client";
import { PropsWithChildren } from "react";
import InformationStyle from "./information.style";

const Information = (props: PropsWithChildren) => {
  const { children } = props;

  return <InformationStyle.Container>{children}</InformationStyle.Container>;
};

export default Information;
