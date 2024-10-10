import Layout from "@/components/atoms/layout/layout";
import Image from "next/image";
import Profile from "@/assets/images/profile.png";

const About = () => {
  return (
    <Layout display={"flex"} padding={"0 5vw"}>
      <div>
        <Image src={Profile} alt={""} />
      </div>
      <div>
        <h2>ABOUT SeoJaeWan</h2>
        <p>
          안녕하세요! 프론트엔드 개발자 서재완입니다.
          <br />
          낯선 기능에 설렘을 가지며 즐거운 개발을 하고 있습니다.
        </p>
        <p>
          React와 Next.JS 환경에서 컴포넌트 단위 개발을 하고 있어요. 어떤 방법을
          사용해야 개발자가 편한 환경에서 개발을 할 수 있을지 고려하며 개발을
          하고 있습니다.
        </p>
        <p>
          서비스의 완성을 위해서는 팀원과의 소통이 중요하다고 생각해요. 혼자
          앞서나가는 것이 아닌 전체의 전투력 상승에 관심이 많습니다. 🤔
        </p>
        <p>
          개발 말고도 해외(일본)여행, 평생을 함께할 취미를 찾기 위해서 즐거운
          취미 찾기에도 열심히 하고 있어요.
        </p>
      </div>
    </Layout>
  );
};

export default About;
