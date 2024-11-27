import Layout from "@/components/atoms/common/layout/layout";
import Contents from "@/components/organisms/blog/contents/contents";
import Info from "@/components/organisms/blog/Info/info";
import { realColor } from "@/style/theme/theme";
import dayjs from "dayjs";

export type BlogDataType = {
  title: string;
  createdAt: string;
  link: string;
  content: string;
  thumbnail: string;
};

const getBlogRss = async () => {
  const blogRaw = await fetch(
    "https://rss.app/feeds/v1.1/v1mPDAoJc0aT8PE7.json",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const blogData = await blogRaw.json();

  const listData = blogData.items.map(
    ({ title, date_published, content_text, url, image }) => ({
      title,
      createdAt: dayjs(date_published).format("YYYY.M.D"),
      link: url,
      content: content_text,
      thumbnail: image,
    })
  ) as BlogDataType[];

  return listData;
};

const Blog = async () => {
  const blogData = await getBlogRss();

  return (
    <Layout
      as={"article"}
      position={"relative"}
      zIndex={2}
      display={"flex"}
      backgroundColor={realColor.white}
      tabletFlexDirection={"column"}
      width={"100%"}
    >
      <Info />
      <Contents blogData={blogData} />
    </Layout>
  );
};

export default Blog;
