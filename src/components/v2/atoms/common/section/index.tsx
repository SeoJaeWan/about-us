"use client";

import { PropsWithChildren } from "react";
import SectionStyle from "./section.style";

const Section = (props: PropsWithChildren) => {
  const { children } = props;

  return <SectionStyle.Container>{children}</SectionStyle.Container>;
};

export default Section;
