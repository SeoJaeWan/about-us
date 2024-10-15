import Layout from "@/components/atoms/common/layout/layout";
import dayjs from "dayjs";

const getBlogRss = async () => {
  const blogRaw = await fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fbum-developer.tistory.com%2Frss",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const blogData = await blogRaw.json();

  const listData = blogData.items.map(({ title, pubDate, link }) => ({
    title,
    createdAt: dayjs(pubDate).format("YYYY.M.D"),
    link,
    thumbnail: blogData.feed.image,
  }));

  return listData;
};

const Blog = async () => {
  const blogData = await getBlogRss();

  return (
    <Layout display={"flex"} padding={"0 5vw"}>
      <div>
        <h2>SeoJaeWan's BLOG</h2>
        <p>
          개발 중 마주한 질문들과 배운 점들을 저만의 방식으로 공유하고 있어요.{" "}
        </p>

        <p>
          글을 잘 쓰는 것은 아니지만, 꾸준히 실천하며 더 나은 글쓰기를 위해
          노력하고 있습니다.{" "}
        </p>
      </div>
      <div></div>
    </Layout>
  );
};

export default Blog;
