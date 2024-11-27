"use client";
import { ReactNode, useEffect, useRef } from "react";
import FadeUpStyle, { Trigger } from "./fadeUp.style";

type FadeUpProps = {
  children: ReactNode;
  isObserving?: boolean;
  duration?: number;
  delay?: number;
};

const FadeUp: React.FC<FadeUpProps> = (props) => {
  const { children, isObserving, duration = 1, delay = 0 } = props;
  const fadeRef = useRef<HTMLDivElement>(null);

  const className = isObserving ? "" : Trigger;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(Trigger);
          } else {
            entry.target.classList.remove(Trigger);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    const currentRef = fadeRef.current;
    if (currentRef && isObserving) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef && isObserving) {
        observer.unobserve(currentRef);
      }
    };
  }, [isObserving]);

  return (
    <FadeUpStyle
      ref={fadeRef}
      className={className}
      $duration={duration}
      $delay={delay}
    >
      {children}
    </FadeUpStyle>
  );
};

export default FadeUp;
