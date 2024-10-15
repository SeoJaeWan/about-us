"use client";

import Image from "@/components/atoms/common/image/image";
import IntroImageStyle from "./introImage.style";
import IntroLogo from "@/assets/images/intro.png";

const IntroImage = () => {
  return (
    <IntroImageStyle>
      <Image
        src={IntroLogo}
        alt={"프론트엔드 개발자 서재완입니다."}
        width={"100%"}
        height={"auto"}
        maxWidth={"1200px"}
        aspectRatio={"1277/305"}
      />
    </IntroImageStyle>
  );
};

export default IntroImage;
