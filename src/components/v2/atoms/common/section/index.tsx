"use client";

import { PropsWithChildren } from "react";
import SectionStyle, { SectionStyleProps } from "./section.style";
import StripDollar from "@/style/v2/utils/stripDollar";

type SectionProps = PropsWithChildren & StripDollar<SectionStyleProps>;

const Section = (props: SectionProps) => {
  const { children, isPadding } = props;

  return (
    <SectionStyle.Container $isPadding={isPadding}>
      {children}
    </SectionStyle.Container>
  );
};

export default Section;
