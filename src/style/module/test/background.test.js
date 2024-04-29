import styled from "styled-components";
import background from "../background";
import { render, screen } from "@testing-library/react";
import { media } from "@/style/theme/theme";
import Theme from "@/lib/theme";

const BackgroundStyle = styled.div`
  ${background}
`;

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
        <BackgroundStyle
          $background={"red"}
          $backgroundColor={"yellow"}
          $backgroundImage={"url(`test.jpg`)"}
          $backgroundPosition={"center"}
          $backgroundRepeat={"no-repeat"}
          $backgroundSize={"cover"}
        >
          background
        </BackgroundStyle>{" "}
      </Theme>
    );

    const backgroundStyle = getComputedStyle(screen.getByText("background"));

    expect(backgroundStyle.background).toBe("red");
    expect(backgroundStyle.backgroundColor).toBe("yellow");
    expect(backgroundStyle.backgroundImage).toBe("url(`test.jpg`)");
    expect(backgroundStyle.backgroundPosition).toBe("center");
    expect(backgroundStyle.backgroundRepeat).toBe("no-repeat");
    expect(backgroundStyle.backgroundSize).toBe("cover");
  });

  it("Background 반응형 테스트 - 노트북", () => {
    window.resizeTo(media.mobile, media.mobile);

    render(
      <Theme>
        <BackgroundStyle $background={"red"} $mobileBackground={"yellow"}>
          background
        </BackgroundStyle>
      </Theme>
    );

    expect(screen.getByText("background")).toHaveStyleRule(
      "background",
      "yellow",
      {
        media: `(max-width: ${media.mobile}px)`,
      }
    );
  });
});
