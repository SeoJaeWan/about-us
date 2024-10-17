import Layout from "@/components/atoms/common/layout/layout";
import BackgroundText from "@/components/molecules/portfolio/backgroundText/backgroundText";
import Lock from "@/assets/images/lock.png";
import News from "@/assets/images/news.png";
import Notes from "@/assets/images/notes.png";
import School from "@/assets/images/school.png";
import Vr from "@/assets/images/vr.png";
import PortfolioItem from "@/components/molecules/portfolio/portfolioItem/portfolioItem";

const portfolioList = [
  {
    name: "무무스트",
    src: Notes,
    href: "https://gamy-wasp-3db.notion.site/115c97bafd8980268af1dfcee8bb794e?pvs=4",
  },
  {
    name: "한국 과총 Webzine",
    src: News,
    href: "https://gamy-wasp-3db.notion.site/Webzine-115c97bafd89804389b0cf0a78f71d71?pvs=4",
  },
  {
    name: "Smart Keeper",
    src: Lock,
    href: "https://gamy-wasp-3db.notion.site/Smart-Keeper-115c97bafd898047836fe728323b33ec?pvs=4",
  },
  {
    name: "친절한 영어교실",
    src: School,
    href: "https://gamy-wasp-3db.notion.site/115c97bafd8980b8898ecefde8ff51e5?pvs=4",
  },
  {
    name: "대진대학교 VR",
    src: Vr,
    href: "https://gamy-wasp-3db.notion.site/VR-115c97bafd8980408f8fd000e5834371?pvs=4",
  },
];

const Portfolio = () => {
  return (
    <Layout position={"relative"} padding={"10vw 5vw"} height={"100vh"}>
      <BackgroundText />
      {portfolioList.map(({ name, src, href }, idx) => (
        <PortfolioItem
          name={name}
          src={src}
          href={href}
          key={name}
          index={idx}
        />
      ))}
    </Layout>
  );
};

export default Portfolio;
