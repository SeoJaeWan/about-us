"use client";

import Image from "@/components/atoms/common/image/image";
import Layout from "@/components/atoms/common/layout/layout";
import { StaticImageData } from "next/image";
import PortfolioItemStyle from "./portfolioItem.style";
import toRem from "@/style/utils/toRem";
import { realColor } from "@/style/theme/theme";

type PortfolioItemProps = {
  info: {
    name: string;
    spec: string;
    company: string;
    year: string;
  };
  src: StaticImageData;
  href: string;
  backgroundColor: string;
};

const PortfolioItem = (props: PortfolioItemProps) => {
  const { info, src, href, backgroundColor } = props;
  const { name, year, spec, company } = info;

  return (
    <PortfolioItemStyle>
      <PortfolioItemStyle.Link href={href} target={"_blank"}>
        <PortfolioItemStyle.ImageBox $backgroundColor={backgroundColor}>
          <Image src={src} alt={""} width={"auto"} height={toRem(180)} />
        </PortfolioItemStyle.ImageBox>

        <PortfolioItemStyle.InfoBox>
          <h3>
            {name}

            <span>`{year}</span>
          </h3>
          <Layout display={"flex"} justifyContent={"space-between"}>
            <p>{spec}</p>

            <p>@{company}</p>
          </Layout>
        </PortfolioItemStyle.InfoBox>
      </PortfolioItemStyle.Link>

      <PortfolioItemStyle.Shadow />
    </PortfolioItemStyle>
  );
};

export default PortfolioItem;
