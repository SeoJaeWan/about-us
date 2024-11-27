import { render, screen } from "@testing-library/react";
import Theme from "@/lib/theme";
import styled from "styled-components";
import createStyle from "../createStyle";
import background from "../styles/background";
import { media } from "@/style/theme/theme";

const { cssStyle, getStyleProps } = createStyle([background]);

const ModuleStyle = styled.div`
  ${cssStyle}
`;

const StyleComponents = (props) => {
  const { children } = props;
  const styleProps = getStyleProps(props);

  return <ModuleStyle {...styleProps}>{children}</ModuleStyle>;
};

describe("Module", () => {
  it("렌더링 테스트 - 스타일 속성을 가지고 있는 컴포넌트가 문제없이 렌더링이 된다.", () => {
    render(
      <Theme>
        <StyleComponents>Module</StyleComponents>
      </Theme>
    );

    expect(screen.getByText("Module")).toBeInTheDocument();
  });

  it("속성 테스트 - css 속성을 넣어주었을 때 정상적으로 스타일이 반영된다.", () => {
    render(
      <Theme>
        <StyleComponents background={"red"}>Module</StyleComponents>
      </Theme>
    );

    const moduleElement = screen.getByText("Module");
    const computedStyles = getComputedStyle(moduleElement);

    expect(computedStyles["background"]).toBe("red");
  });

  it("반응형 테스트 - 반응형 키워드를 붙인 스타일이 반영된다.", () => {
    render(
      <Theme>
        <StyleComponents mobileBackground={"red"}>Module</StyleComponents>
      </Theme>
    );

    expect(screen.getByText("Module")).toHaveStyleRule("background", "red", {
      media: `(max-width: ${media.mobile}px)`,
    });
  });
});
