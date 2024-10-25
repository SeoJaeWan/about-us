"use client";

import Logo from "@/components/molecules/common/logo/logo";
import InfoStyle from "./info.style";
import ToGo from "@/components/atoms/common/toGo/toGo";

const Info = () => {
  return (
    <InfoStyle>
      <InfoStyle.Header>
        <Logo width={"auto"} height={"70px"} />
        's
        <br />
        BLOG
      </InfoStyle.Header>
      <InfoStyle.Content>
        개발 중 마주한 질문들과 그 과정에서 배운 점들을 공유하는 공간입니다.{" "}
        <br />
        제가 경험한 다양한 문제들과 해결 과정을 공유해 도움이 되고 싶어요.
        <br />
        글을 잘 쓰는 것은 아니지만, 꾸준히 실천하며 더 나은 글쓰기를 위해
        노력하고 있습니다.
      </InfoStyle.Content>

      <ToGo href={"https://bum-developer.tistory.com/"} isWhite>
        블로그 더보기
      </ToGo>
    </InfoStyle>
  );
};

export default Info;
