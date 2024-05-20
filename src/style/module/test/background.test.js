import styled from "styled-components";
import background from "../background";
import { render, screen } from "@testing-library/react";
import { media } from "@/style/theme/theme";
import Theme from "@/lib/theme";

const BackgroundStyle = styled.div`
  ${background}
`;

const testProps = {
  $background: "red",
  $backgroundColor: "yellow",
  $backgroundImage: "url(`test.jpg`)",
  $backgroundPosition: "center",
  $backgroundRepeat: "no-repeat",
  $backgroundSize: "cover",
};

const notebookTestProps = {
  $notebookBackground: "red",
};

const convertNotebookProps = {
  $notebookBackground: "background",
};

const tabletTestProps = {
  $tabletBackground: "red",
};

const convertTabletProps = {
  $tabletBackground: "background",
};

const mobileTestProps = {
  $mobileBackground: "red",
};

const convertMobileProps = {
  $mobileBackground: "background",
};

describe("Background", () => {
  it("Background 렌더링 테스트 - background 속성을 포함한 컴포넌트가 문제없이 렌더링 된다.", () => {
    render(
      <Theme>
        <BackgroundStyle>background</BackgroundStyle>
      </Theme>
    );

    expect(screen.getByText("background")).toBeInTheDocument();
  });

  it("Background 속성 테스트- background가 가지고 있는 속성들이 제대로 적용이 된다.", () => {
    render(
      <Theme>
        <BackgroundStyle {...testProps}>background</BackgroundStyle>{" "}
      </Theme>
    );

    const backgroundElement = screen.getByText("background");
    const computedStyles = getComputedStyle(backgroundElement);

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
    "Background 반응형 테스트 - %s  - 미디어쿼리에 테마로 지정한 사이즈의 쿼리가 설정된다.",
    (device, props, convert, mediaQuery) => {
      render(
        <Theme>
          <BackgroundStyle {...props}>background</BackgroundStyle>
        </Theme>
      );

      Object.entries(props).forEach(([key, value]) => {
        expect(screen.getByText("background")).toHaveStyleRule(
          convert[key],
          value,
          {
            media: `(max-width: ${mediaQuery}px)`,
          }
        );
      });
    }
  );
});
