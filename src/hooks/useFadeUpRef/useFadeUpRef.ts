import { useEffect, useRef } from "react";

const useFadeUpRef = () => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScrollEvent = () => {
      if (ref.current) {
        const height = ref.current.getBoundingClientRect().height;
        if (ref.current.getBoundingClientRect().bottom <= height / 2) {
          ref.current.classList.add("fadeReverseDown");
          ref.current.classList.remove("fadeUp");
        } else {
          ref.current.classList.add("fadeUp");
          ref.current.classList.remove("fadeReverseDown");
        }
      }
    };

    window.addEventListener("scroll", handleScrollEvent);
    handleScrollEvent();

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  return ref;
};

export default useFadeUpRef;
