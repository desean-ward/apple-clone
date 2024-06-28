'use client'
import Hero from "@/components/hero/hero.component";
import Highlights from "@/components/highlights/highlights.component";
import Navbar from "@/components/navbar/navbar.component";
import Model from "@/components/model/model.component";

import * as Sentry from '@sentry/nextjs'

const Home = () => {
  return (
    <main className='bg-black'>
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
    </main>
  );
};

export default Sentry.withProfiler(Home);
