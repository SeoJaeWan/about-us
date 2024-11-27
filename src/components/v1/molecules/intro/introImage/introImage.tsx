"use client";

import Image from "@/components/v1/atoms/common/image/image";
import IntroLogo from "@/assets/v1/images/intro.png";
import Layout from "@/components/v1/atoms/common/layout/layout";
import { useRef } from "react";

const IntroImage = () => {
  const ref = useRef();

  return (
    <Layout display={"flex"} justifyContent={"center"}>
      <Image
        ref={ref}
        src={IntroLogo}
        className={"fadeUp"}
        alt={"프론트엔드 개발자 서재완입니다."}
        width={"100%"}
        height={"auto"}
        maxWidth={"1200px"}
        aspectRatio={"1277/305"}
      />
    </Layout>
  );
};

export default IntroImage;
