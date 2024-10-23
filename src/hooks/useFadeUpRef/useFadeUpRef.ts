import { MutableRefObject, useEffect, useRef } from "react";

const useFadeUpRef = <T extends HTMLElement>(baseRef: MutableRefObject<T>) => {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const hiddenRef = baseRef.current;
    const currentRef = ref.current;

    if (!hiddenRef || !currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            currentRef.classList.remove("fadeUp--ref");
            currentRef.classList.add("fadeReverse--ref");
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
            entry.target.classList.add("fadeUp--ref");
            entry.target.classList.remove("fadeReverse--ref");
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
