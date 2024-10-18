"use client";
import Title from "@/components/atoms/common/title/title";
import toRem from "@/style/utils/toRem";
import BackgroundTextSVG from "./backgroundTextSVG";
import BackgroundTextStyle from "./backgroundText.style";

const BackgroundText = () => {
  return (
    <BackgroundTextStyle>
      <Title fontSize={toRem(28)} letterSpacing={toRem(-2)}>
        WORK EXPERIENCE
      </Title>

      <BackgroundTextSVG />
    </BackgroundTextStyle>
  );
};

export default BackgroundText;
