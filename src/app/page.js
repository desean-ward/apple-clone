"use client";
import Hero from "@/components/hero/hero.component";
import Highlights from "@/components/highlights/highlights.component";
import Navbar from "@/components/navbar/navbar.component";
import Model from "@/components/model/model.component";

import * as Sentry from "@sentry/nextjs";
import Features from "@/components/features/features.component";
import HowItWorks from "@/components/how-it-works/how-it-works.component";
import Footer from "@/components/footer/footer.component";

const Home = () => {
  return (
    <main className='bg-black'>
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
};

export default Sentry.withProfiler(Home);
