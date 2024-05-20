import styled from "styled-components";
import font from "../font";
import { render, screen } from "@testing-library/react";
import { media } from "@/style/theme/theme";
import Theme from "@/lib/theme";

const FontStyle = styled.div`
  ${font}
`;

const testProps = {
  $color: "red",
  $fontWeight: "500",
  $textAlign: "center",
  $fontSize: "16px",
  $lineHeight: "normal",
  $textDecoration: "underline",
};

const notebookTestProps = {
  $notebookColor: "red",
};

const convertNotebookProps = {
  $notebookColor: "color",
};

const tabletTestProps = {
  $tabletColor: "red",
};

const convertTabletProps = {
  $tabletColor: "color",
};

const mobileTestProps = {
  $mobileColor: "red",
};

const convertMobileProps = {
  $mobileColor: "color",
};

describe("Font", () => {
  it("Font 렌더링 테스트 - font 속성을 포함한 컴포넌트가 문제없이 렌더링 된다.", () => {
    render(
      <Theme>
        <FontStyle>font</FontStyle>
      </Theme>
    );

    expect(screen.getByText("font")).toBeInTheDocument();
  });

  it("Font 속성 테스트- font 가지고 있는 속성들이 제대로 적용이 된다.", () => {
    render(
      <Theme>
        <FontStyle {...testProps}>font</FontStyle>
      </Theme>
    );

    const colorElement = screen.getByText("font");
    const computedStyles = getComputedStyle(colorElement);

    Object.entries(testProps).forEach(([key, value]) => {
      const cssProperty = key.substring(1);

      expect(computedStyles[cssProperty]).toBe(value);
    });
  });

  it.each([
    ["notebook", notebookTestProps, convertNotebookProps, media.notebook],
    ["tablet", tabletTestProps, convertTabletProps, media.tablet],
    ["mobile", mobileTestProps, convertMobileProps, media.mobile],
  ])(
    "Font 반응형 테스트 - %s  - 미디어쿼리에 테마로 지정한 사이즈의 쿼리가 설정된다.",
    (device, props, convert, mediaQuery) => {
      render(
        <Theme>
          <FontStyle {...props}>font</FontStyle>
        </Theme>
      );

      Object.entries(props).forEach(([key, value]) => {
        expect(screen.getByText("font")).toHaveStyleRule(convert[key], value, {
          media: `(max-width: ${mediaQuery}px)`,
        });
      });
    }
  );
});
