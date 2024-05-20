import styled from "styled-components";
import border from "../border";
import { render, screen } from "@testing-library/react";
import { media } from "@/style/theme/theme";
import Theme from "@/lib/theme";

const BorderStyle = styled.div`
  ${border}
`;

const testProps = {
  $border: "1px",
  $borderWidth: "2px",
  $borderTop: "2px",
  $borderTopWidth: "2px",
  $borderRight: "2px",
  $borderRightWidth: "2px",
  $borderBottom: "2px",
  $borderBottomWidth: "2px",
  $borderLeft: "2px",
  $borderLeftWidth: "2px",
  $borderColor: "red",
  $borderStyle: "solid",
  $borderRadius: "10px",
  $boxShadow: "10px 5px 5px red",
};

const notebookTestProps = {
  $notebookBorder: "1px",
};

const convertNotebookProps = {
  $notebookBorder: "border",
};

const tabletTestProps = {
  $tabletBorder: "1px",
};

const convertTabletProps = {
  $tabletBorder: "border",
};

const mobileTestProps = {
  $mobileBorder: "1px",
};

const convertMobileProps = {
  $mobileBorder: "border",
};

describe("Border", () => {
  it("Border 렌더링 테스트 - border 속성을 포함한 컴포넌트가 문제없이 렌더링 된다.", () => {
    render(
      <Theme>
        <BorderStyle>border</BorderStyle>
      </Theme>
    );

    expect(screen.getByText("border")).toBeInTheDocument();
  });

  it("Border 속성 테스트- border가 가지고 있는 속성들이 제대로 적용이 된다.", () => {
    render(
      <Theme>
        <BorderStyle {...testProps}>border</BorderStyle>
      </Theme>
    );

    const borderElement = screen.getByText("border");
    const computedStyles = getComputedStyle(borderElement);

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
    "Border 반응형 테스트 - %s  - 미디어쿼리에 테마로 지정한 사이즈의 쿼리가 설정된다.",
    (device, props, convert, mediaQuery) => {
      render(
        <Theme>
          <BorderStyle {...props}>border</BorderStyle>
        </Theme>
      );

      Object.entries(props).forEach(([key, value]) => {
        expect(screen.getByText("border")).toHaveStyleRule(
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
