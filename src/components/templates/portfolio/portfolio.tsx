"use client";

import Layout from "@/components/atoms/common/layout/layout";
import BackgroundText from "@/components/molecules/portfolio/backgroundText/backgroundText";
import Lock from "@/assets/images/lock.png";
import News from "@/assets/images/news.png";
import Notes from "@/assets/images/notes.png";
import School from "@/assets/images/school.png";
import Vr from "@/assets/images/vr.png";
import PortfolioItem from "@/components/molecules/portfolio/portfolioItem/portfolioItem";
import toRem from "@/style/utils/toRem";
import { useEffect, useRef } from "react";
import { realColor } from "@/style/theme/theme";

const portfolioList = [
  {
    info: {
      name: "무무스트",
      year: "24",
      spec: "React",
      company: "로맨",
    },
    src: Notes,
    href: "https://gamy-wasp-3db.notion.site/115c97bafd8980268af1dfcee8bb794e?pvs=4",
    backgroundColor: "#feca57",
  },
  {
    info: {
      name: "한국 과총 Webzine",
      year: "24",
      spec: "React",
      company: "로맨",
    },
    src: News,
    href: "https://gamy-wasp-3db.notion.site/Webzine-115c97bafd89804389b0cf0a78f71d71?pvs=4",
    backgroundColor: "#badc58",
  },
  {
    info: {
      name: "Smart Keeper",
      year: "21",
      spec: "React",
      company: "포립 소프트웨어",
    },
    src: Lock,
    href: "https://gamy-wasp-3db.notion.site/Smart-Keeper-115c97bafd898047836fe728323b33ec?pvs=4",
    backgroundColor: "#c7ecee",
  },
  {
    info: {
      name: "친절한 영어교실",
      year: "21",
      spec: "React",
      company: "포립 소프트웨어",
    },
    src: School,
    href: "https://gamy-wasp-3db.notion.site/115c97bafd8980b8898ecefde8ff51e5?pvs=4",
    backgroundColor: "#30336b",
  },
  {
    info: {
      name: "대진대학교 VR",
      year: "20",
      spec: "React",
      company: "포립 소프트웨어",
    },
    src: Vr,
    href: "https://gamy-wasp-3db.notion.site/VR-115c97bafd8980408f8fd000e5834371?pvs=4",
    backgroundColor: "#6ab04c",
  },
];

const Start = 350;
const End = 300;

const Portfolio = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const layoutRef = useRef<HTMLDivElement>();

  useEffect(() => {
    const getTopOpacity = () => {
      const { top } = layoutRef.current.getBoundingClientRect();

      const show = 200;
      const opacity = Math.min((1 * ((Start - top) / show) * 100) / 100, 1);

      return opacity;
    };

    const getBottomOpacity = () => {
      const { bottom } = layoutRef.current.getBoundingClientRect();
      const show = 640;
      const opacity = (1 * (((bottom - End) / (show - End)) * 100)) / 100;

      return opacity;
    };

    const opacityAnimation = () => {
      const { top, bottom } = layoutRef.current.getBoundingClientRect();

      if (top > Start) {
        backgroundRef.current.style.opacity = "0";
        backgroundRef.current.classList.remove("bounce");
        return;
      }

      if (bottom < End) {
        backgroundRef.current.style.opacity = "0";
        backgroundRef.current.classList.remove("bounce");
        return;
      }

      const topOpacity = getTopOpacity();
      const bottomOpacity = getBottomOpacity();

      const opacity = bottomOpacity < 1 ? bottomOpacity : topOpacity;

      backgroundRef.current.style.opacity = opacity.toString();

      if (opacity > 0.9) {
        backgroundRef.current.classList.add("bounce");
      }
    };

    window.addEventListener("scroll", opacityAnimation);
    opacityAnimation();

    return () => {
      window.removeEventListener("scroll", opacityAnimation);
    };
  }, []);

  return (
    <Layout
      as="article"
      position={"relative"}
      padding={"10vw 15vw"}
      backgroundColor={realColor.white}
      ref={layoutRef}
    >
      <BackgroundText ref={backgroundRef} />
      <Layout
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        as={"ul"}
        padding={`${toRem(400)} 0`}
      >
        {portfolioList.map(({ info, src, href, backgroundColor }, idx) => (
          <PortfolioItem
            info={info}
            src={src}
            href={href}
            backgroundColor={backgroundColor}
            key={idx}
          />
        ))}
      </Layout>
    </Layout>
  );
};

export default Portfolio;
