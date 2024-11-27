"use client";

import Section from "@/components/v2/atoms/common/section";
import InfoStyle from "./info.style";
import About from "@/components/v2/atoms/home/about";
import { useEffect, useRef } from "react";

const Info = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const { top } = scrollRef.current.getBoundingClientRect();

      //
      console.log(top);
    });
  }, []);

  return (
    <Section>
      <InfoStyle.Container>
        <InfoStyle.Scroller ref={scrollRef}>
          <About />
          <About />
          <About />
          <About />
        </InfoStyle.Scroller>
      </InfoStyle.Container>
    </Section>
  );
};

export default Info;
