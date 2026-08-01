import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import WhyUs from "./components/sections/WhyUs";
import Process from "./components/sections/Process";
import Portfolio from "./components/sections/Portfolio";
import Technologies from "./components/sections/Technologies";
import Testimonials from "./components/sections/Testimonials";
import Stats from "./components/sections/Stats";
import Industries from "./components/sections/Industries";
import Faq from "./components/sections/Faq";
import CtaBanner from "./components/sections/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <Process />
      <Portfolio limit={3} />
      <Technologies />
      <Testimonials />
      <Stats />
      <Industries />
      <Faq />
      <CtaBanner />
    </>
  );
}
