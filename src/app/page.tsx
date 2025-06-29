import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Statistic from "@/components/Statistic";
import Testimonial from "@/components/Testimonial";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Statistic />
      <Gallery />
      <WhyChooseUs />
      <Testimonial />
    </>
  );
}
