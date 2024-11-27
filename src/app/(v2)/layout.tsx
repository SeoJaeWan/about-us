import StyledComponentsRegistry from "@/lib/v2/registry";

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
