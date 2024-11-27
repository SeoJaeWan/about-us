"use client";

import Section from "@/components/v2/atoms/common/section";
import InfoStyle from "./info.style";
import About from "@/components/v2/atoms/home/about";
import { useEffect, useRef } from "react";

const Info = () => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const { top, bottom, height } = rootRef.current.getBoundingClientRect();
      const pageHeight = window.innerHeight;
      //
      if (top < 0) {
        console.log(bottom, pageHeight);
      }
    });
  }, []);

  return (
    <Section>
      <InfoStyle.Container ref={rootRef}>
        <InfoStyle.Hidden>
          <InfoStyle.Scroller ref={scrollRef}>
            <About />
            <About />
            <About />
            <About />
          </InfoStyle.Scroller>
        </InfoStyle.Hidden>
      </InfoStyle.Container>
    </Section>
  );
};

export default Info;
