"use client";
import { useEffect, useRef } from "react";
import HeaderStyle from "./header.style";

const Header = () => {
  const headerRef = useRef<HTMLHeadElement>(null);

  useEffect(() => {
    const getTopBottomPosition = (articleList: string[]) => {
      const elementPosition = articleList.map((className) => {
        const articleElem = document.querySelector(className);
        const { top, bottom } = articleElem.getBoundingClientRect();

        return [top, bottom];
      });

      const select = elementPosition.find(([_, bottom]) => bottom > 0);

      return select ?? elementPosition.pop();
    };

    const headerColorAnimation = (articleList: string[]) => () => {
      requestAnimationFrame(() => {
        const [top, bottom] = getTopBottomPosition(articleList);

        const topMargin = window.innerWidth * 0.04;
        const headerHeight = headerRef.current.getBoundingClientRect().height;

        const firstElem = document.querySelector(".first") as HTMLDivElement;
        const secondElem = document.querySelector(".second") as HTMLDivElement;

        const start = topMargin + headerHeight;

        const topPercent = ((start - top) / (start - topMargin)) * 100;
        const bottomPercent = ((start - bottom) / (start - topMargin)) * 100;

        if (top <= start && bottom > start) {
          secondElem.style.height = `100%`;
          if (top <= topMargin) {
            firstElem.style.height = "0%";
          } else {
            firstElem.style.height = `${100 - topPercent}%`;
          }
        } else if (bottom <= start && bottom > 0) {
          firstElem.style.height = "0%";
          if (bottom <= topMargin) {
            secondElem.style.height = `0%`;
          }
          secondElem.style.height = `${100 - bottomPercent}%`;
        } else {
          firstElem.style.height = "100%";
        }
      });
    };

    const blogAnimation = headerColorAnimation([".about", ".blog"]);
    // const aboutAnimation = headerColorAnimation(".about");

    window.addEventListener("scroll", blogAnimation);
    // window.addEventListener("scroll", aboutAnimation);
    return () => {
      window.removeEventListener("scroll", blogAnimation);
      // window.removeEventListener("scroll", aboutAnimation);
    };
  }, []);

  return (
    <HeaderStyle ref={headerRef}>
      <h1 className="hidden">Seo's Portfolio</h1>
      <div className="black background first">
        <div className="content">
          <p>Seo's Portfolio</p>
        </div>
      </div>
      <div className="white background second">
        <div className="content">
          <p>Seo's Portfolio</p>
        </div>
      </div>
      <div className="black background">
        <div className="content">
          <p>Seo's Portfolio</p>
        </div>
      </div>
    </HeaderStyle>
  );
};

export default Header;
