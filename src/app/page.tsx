import About from "@/components/templates/about/about";
import Blog from "@/components/templates/blog/blog";
import Contact from "@/components/templates/contact/contact";
import Intro from "@/components/templates/intro/intro";
import Portfolio from "@/components/templates/portfolio/portfolio";

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
      {/* <Contact /> */}
    </main>
  );
};

export default Home;
