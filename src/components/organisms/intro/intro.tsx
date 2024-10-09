import Layout from "@/components/atoms/layout/layout";

const Intro = () => {
  return (
    <Layout as="article" padding={"calc(4vw + 4rem) 5vw"}>
      <strong>스트레스가 아닌 즐거움</strong>
      <h2>프론트엔드 개발자 서재완입니다.</h2>
      <p>
        <span>
          매 작업에서 배움을 찾으며, 즐기는 마음으로 개발을 하고 있는
          서재완입니다.
        </span>
        <span>
          중복을 싫어하며, 직관적이고 이해하기 쉬운 코드를 작성하는 것을 목표로
          해요.
        </span>
        <span>
          어려운 문제의 스트레스보단 해결했을 때의 즐거움을 더 크게 느낍니다.
        </span>
      </p>
    </Layout>
  );
};

export default Intro;
