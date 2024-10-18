import Layout from "@/components/atoms/common/layout/layout";
import BackgroundText from "@/components/molecules/portfolio/backgroundText/backgroundText";
import Lock from "@/assets/images/lock.png";
import News from "@/assets/images/news.png";
import Notes from "@/assets/images/notes.png";
import School from "@/assets/images/school.png";
import Vr from "@/assets/images/vr.png";
import PortfolioItem from "@/components/molecules/portfolio/portfolioItem/portfolioItem";
import toRem from "@/style/utils/toRem";

const portfolioList = [
  {
    info: {
      name: "무무스트",
      year: "24",
      spec: "React",
      company: "로맨",
    },
    src: Notes,
    href: "https://gamy-wasp-3db.notion.site/115c97bafd8980268af1dfcee8bb794e?pvs=4",
    backgroundColor: "#feca57",
  },
  {
    info: {
      name: "한국 과총 Webzine",
      year: "24",
      spec: "React",
      company: "로맨",
    },
    src: News,
    href: "https://gamy-wasp-3db.notion.site/Webzine-115c97bafd89804389b0cf0a78f71d71?pvs=4",
    backgroundColor: "#badc58",
  },
  {
    info: {
      name: "Smart Keeper",
      year: "21",
      spec: "React",
      company: "포립 소프트웨어",
    },
    src: Lock,
    href: "https://gamy-wasp-3db.notion.site/Smart-Keeper-115c97bafd898047836fe728323b33ec?pvs=4",
    backgroundColor: "#c7ecee",
  },
  {
    info: {
      name: "친절한 영어교실",
      year: "21",
      spec: "React",
      company: "포립 소프트웨어",
    },
    src: School,
    href: "https://gamy-wasp-3db.notion.site/115c97bafd8980b8898ecefde8ff51e5?pvs=4",
    backgroundColor: "#30336b",
  },
  {
    info: {
      name: "대진대학교 VR",
      year: "20",
      spec: "React",
      company: "포립 소프트웨어",
    },
    src: Vr,
    href: "https://gamy-wasp-3db.notion.site/VR-115c97bafd8980408f8fd000e5834371?pvs=4",
    backgroundColor: "#6ab04c",
  },
];

const Portfolio = () => {
  return (
    <Layout as="article" position={"relative"} padding={"10vw 15vw"}>
      <BackgroundText />
      <Layout
        display={"flex"}
        flexDirection={"column"}
        as={"ul"}
        padding={`${toRem(400)} 0`}
      >
        {portfolioList.map(({ info, src, href, backgroundColor }, idx) => (
          <PortfolioItem
            info={info}
            src={src}
            href={href}
            backgroundColor={backgroundColor}
            key={idx}
            index={idx}
          />
        ))}
      </Layout>
    </Layout>
  );
};

export default Portfolio;
