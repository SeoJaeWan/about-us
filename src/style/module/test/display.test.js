import styled from "styled-components";
import display from "../display";
import { render, screen } from "@testing-library/react";
import { media } from "@/style/theme/theme";
import Theme from "@/lib/theme";

const DisplayStyle = styled.div`
  ${display}
`;

const testProps = {
  $display: "flex",
  $justifyContent: "flex-start",
  $alignItems: "flex-end",
};

const notebookTestProps = {
  $notebookDisplay: "flex",
};

const convertNotebookProps = {
  $notebookDisplay: "display",
};

const tabletTestProps = {
  $tabletDisplay: "flex",
};

const convertTabletProps = {
  $tabletDisplay: "display",
};

const mobileTestProps = {
  $mobileDisplay: "red",
};

const convertMobileProps = {
  $mobileDisplay: "display",
};

describe("Display", () => {
  it("Display 렌더링 테스트 - display 속성을 포함한 컴포넌트가 문제없이 렌더링 된다.", () => {
    render(
      <Theme>
        <DisplayStyle>display</DisplayStyle>
      </Theme>
    );

    expect(screen.getByText("display")).toBeInTheDocument();
  });

  it("Display 속성 테스트- display 가지고 있는 속성들이 제대로 적용이 된다.", () => {
    render(
      <Theme>
        <DisplayStyle {...testProps}>display</DisplayStyle>
      </Theme>
    );

    const displayElement = screen.getByText("display");
    const computedStyles = getComputedStyle(displayElement);

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
    "Display 반응형 테스트 - %s  - 미디어쿼리에 테마로 지정한 사이즈의 쿼리가 설정된다.",
    (device, props, convert, mediaQuery) => {
      render(
        <Theme>
          <DisplayStyle {...props}>display</DisplayStyle>
        </Theme>
      );

      Object.entries(props).forEach(([key, value]) => {
        expect(screen.getByText("display")).toHaveStyleRule(
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
