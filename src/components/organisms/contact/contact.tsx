import Layout from "@/components/atoms/layout/layout";

const Contact = () => {
  return (
    <Layout padding={"0 5vw"}>
      <h2>CONTACT</h2>

      <p>서재완에 대해 더 알고 싶으신가요?</p>
      <strong>sjw7324@gmail.com</strong>
      <p>
        성장 중인 개발자를 찾으시나요? 언제든지 연락 주세요! 메일을 보내주시면
        1~2일 내로 답장드리겠습니다.
      </p>

      <p>
        인간 서재완이 궁금하셔도 좋아요. 커피챗 중독자로서 언제든지 대화를 나눌
        준비가 되어 있어요.
      </p>
      <p>
        현재 거주지 : <strong>대구</strong>
      </p>
    </Layout>
  );
};

export default Contact;
