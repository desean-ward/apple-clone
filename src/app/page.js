import Hero from "@/components/hero/hero-component";
import Highlights from "@/components/highlights/highlights-component";
import Navbar from "@/components/navbar/navbar-component";

const Home = () => {
  return (
    <main className='bg-black'>
      <Navbar />
      <Hero />
      <Highlights />
    </main>
  );
};

export default Home;
