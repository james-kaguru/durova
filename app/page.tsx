import { About } from "./about";
import { Hero } from "./hero";
import { Services } from "./services";
import Faq from "./faq";
import { Contact } from "./contact";
import { Footer } from "./footer";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <Services />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}
