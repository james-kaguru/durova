import { About } from "./about";
import { Hero } from "./hero";
import { Services } from "./services";
import Faq from "./faq";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <Services />
      <Faq />
    </div>
  );
}
