import About from "@/components/v1/templates/about/about";
import Blog from "@/components/v1/templates/blog/blog";
import Contact from "@/components/v1/templates/contact/contact";
import Intro from "@/components/v1/templates/intro/intro";
import Portfolio from "@/components/v1/templates/portfolio/portfolio";

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
