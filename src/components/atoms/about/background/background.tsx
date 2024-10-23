"use client";

import { useEffect, useRef } from "react";
import BackgroundStyle from "./background.style";

const Background = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const translateAnimation = () => {
      const viewHeight = window.innerHeight;
      const start = viewHeight * (6 / 7);
      const bottom = viewHeight - window.scrollY;

      const percent = 1 - Math.floor((bottom / start) * 100) / 100;

      backgroundRef.current.style.transform = `translateY(-${Math.max(
        Math.min(percent * start, start),
        0
      )}px)`;
    };
    window.addEventListener("scroll", translateAnimation);
    translateAnimation();

    return () => {
      window.removeEventListener("scroll", translateAnimation);
    };
  }, []);

  return <BackgroundStyle ref={backgroundRef} />;
};

export default Background;
