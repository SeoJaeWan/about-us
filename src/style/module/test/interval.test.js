import styled from "styled-components";
import interval from "../interval";
import { render, screen } from "@testing-library/react";
import { media } from "@/style/theme/theme";
import Theme from "@/lib/theme";

const IntervalStyle = styled.div`
  ${interval}
`;

const testProps = {
  $margin: "10px 20px",
  $padding: "20px 10px",
};

const notebookTestProps = {
  $notebookMargin: "10px 10px 10px 10px",
};

const convertNotebookProps = {
  $notebookMargin: "margin",
};

const tabletTestProps = {
  $tabletMargin: "10px 10px 10px 10px",
};

const convertTabletProps = {
  $tabletMargin: "margin",
};

const mobileTestProps = {
  $mobileMargin: "10px 10px 10px 10px",
};

const convertMobileProps = {
  $mobileMargin: "margin",
};

describe("Interval", () => {
  it("Interval 렌더링 테스트 - interval 속성을 포함한 컴포넌트가 문제없이 렌더링 된다.", () => {
    render(
      <Theme>
        <IntervalStyle>interval</IntervalStyle>
      </Theme>
    );

    expect(screen.getByText("interval")).toBeInTheDocument();
  });

  it("Interval 속성 테스트 - interval 가지고 있는 속성들이 제대로 적용이 된다.", () => {
    render(
      <Theme>
        <IntervalStyle {...testProps}>interval</IntervalStyle>
      </Theme>
    );

    const colorElement = screen.getByText("interval");
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
    "Interval 반응형 테스트 - %s  - 미디어쿼리에 테마로 지정한 사이즈의 쿼리가 설정된다.",
    (device, props, convert, mediaQuery) => {
      render(
        <Theme>
          <IntervalStyle {...props}>interval</IntervalStyle>
        </Theme>
      );

      Object.entries(props).forEach(([key, value]) => {
        expect(screen.getByText("interval")).toHaveStyleRule(
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
