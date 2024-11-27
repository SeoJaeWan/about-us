import StyledComponentsRegistry from "@/lib/registry";

const Layout = ({ children }) => {
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default Layout;
