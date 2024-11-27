"use client";
import ToGoStyle from "./toGo.style";
import { forwardRef, ReactNode } from "react";

interface ToGoProps extends React.HTMLProps<HTMLAnchorElement> {
  children: ReactNode;
  href: string;
  isWhite?: boolean;
}

const ToGo = forwardRef<HTMLAnchorElement, ToGoProps>((props, ref) => {
  const { href, isWhite, children } = props;
  const styleProps = ToGoStyle.getStyleProps(props);

  return (
    <ToGoStyle
      href={href}
      target={"_blank"}
      {...styleProps}
      ref={ref}
      $isWhite={isWhite}
    >
      {children}

      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="12" fill="black" />
        <path
          d="M10 7L15 12L10 17"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </ToGoStyle>
  );
});

export default ToGo;
