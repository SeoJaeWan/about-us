import LayoutStyle from "./layout.style";

const Layout = (props) => {
  const { as, children } = props;
  const styleProps = LayoutStyle.getStyleProps(props);

  return (
    <LayoutStyle as={as} {...styleProps}>
      {children}
    </LayoutStyle>
  );
};

export default Layout;
