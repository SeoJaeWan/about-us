"use client";

import Layout from "@/components/v1/atoms/common/layout/layout";
import IntroContent from "@/components/v1/molecules/intro/introContent/introContent";
import IntroImage from "@/components/v1/molecules/intro/introImage/introImage";
import { useEffect, useRef } from "react";

const IntroAnimation = () => {
  const introRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const opacityAnimation = () => {
      const currentRef = introRef.current;

      if (!currentRef) return;

      const { bottom, height } = introRef.current.getBoundingClientRect();
      const start = height * (6 / 7);

      const percent = Math.floor((bottom / start) * 100) / 100;

      currentRef.style.opacity = percent.toString();
    };

    window.addEventListener("scroll", opacityAnimation);
    opacityAnimation();

    return () => {
      window.removeEventListener("scroll", opacityAnimation);
    };
  }, [introRef]);

  return (
    <Layout
      display={"flex"}
      alignItem={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
      width={"100%"}
      height={"100%"}
      padding={`0 5vw`}
      ref={introRef}
    >
      <IntroImage />

      <IntroContent />
    </Layout>
  );
};

export default IntroAnimation;
