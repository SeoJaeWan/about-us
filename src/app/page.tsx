"use client";

import About from "@/components/organisms/about/about";
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
      <article></article>

      {/* Contact */}
      <article></article>
    </main>
  );
};

export default Home;
