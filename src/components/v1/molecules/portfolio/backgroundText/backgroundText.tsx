"use client";
import Title from "@/components/v1/atoms/common/title/title";
import toRem from "@/style/utils/toRem";
import BackgroundTextSVG from "./backgroundTextSVG";
import BackgroundTextStyle from "./backgroundText.style";
import { realColor } from "@/style/theme/theme";
import { forwardRef, useEffect, useRef } from "react";

const BackgroundText = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <BackgroundTextStyle ref={ref}>
      <Title fontSize={toRem(18)} fontWeight={500} color={realColor.gray3}>
        WORK EXPERIENCE
      </Title>

      <BackgroundTextSVG />
    </BackgroundTextStyle>
  );
});

export default BackgroundText;
