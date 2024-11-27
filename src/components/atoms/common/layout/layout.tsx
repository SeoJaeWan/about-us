"use client";
import { forwardRef, ReactNode } from "react";
import LayoutStyle from "./layout.style";

interface LayoutProps extends React.HTMLProps<HTMLDivElement> {
  as?: keyof JSX.IntrinsicElements;
  className: string;
  children: ReactNode;
}

const Layout = forwardRef<HTMLDivElement, LayoutProps>((props, ref) => {
  const { as, className, children } = props;
  const styleProps = LayoutStyle.getStyleProps(props);

  return (
    <LayoutStyle className={className} as={as} {...styleProps} ref={ref}>
      {children}
    </LayoutStyle>
  );
});

export default Layout;
