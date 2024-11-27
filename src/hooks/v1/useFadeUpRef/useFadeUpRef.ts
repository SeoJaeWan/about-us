import { MutableRefObject, useEffect, useRef } from "react";

const useFadeUpRef = <T extends HTMLElement>(
  baseRef: MutableRefObject<T>,
  animationClassName: string = "fadeUp--ref",
  animationRemoveClassName: string = "fadeUpReverse--ref"
) => {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const hiddenRef = baseRef.current;
    const currentRef = ref.current;

    if (!hiddenRef || !currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            currentRef.classList.remove(animationClassName);
            currentRef.classList.add(animationRemoveClassName);
          }
        });
      },
      {
        threshold: 0,
      }
    );

    observer.observe(hiddenRef);

    return () => {
      observer.unobserve(hiddenRef);
    };
  }, [baseRef, ref]);

  useEffect(() => {
    const currentRef = ref.current;

    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animationClassName);
            entry.target.classList.remove(animationRemoveClassName);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
    };
  }, [ref]);

  return ref;
};

export default useFadeUpRef;
