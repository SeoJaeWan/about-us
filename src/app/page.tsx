import About from "@/components/organisms/about/about";
import Blog from "@/components/organisms/blog/blog";
import Contact from "@/components/organisms/contact/contact";
import Intro from "@/components/organisms/intro/intro";
import Portfolio from "@/components/organisms/portfolio/portfolio";

const Home = () => {
  return (
    <main>
      {/* Intro */}
      <Intro />

      {/* About */}
      <About />

      {/* Portfolio */}
      <Portfolio />

      {/* Blog */}
      <Blog />

      {/* Contact */}
      <Contact />
    </main>
  );
};

export default Home;
