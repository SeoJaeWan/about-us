import { StaticImageData } from "next/image";

type PortfolioItemProps = {
  name: string;
  src: StaticImageData;
  href: string;
  index: number;
};

const PortfolioItem = (props: PortfolioItemProps) => {
  const { name, src, href, index } = props;

  const isLeft = index % 2 === 0;

  return <></>;
};

export default PortfolioItem;
