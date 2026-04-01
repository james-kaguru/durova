import { About } from "./about";
import { Hero } from "./hero";
import { Services } from "./services";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Services />
      <About />
    </div>
  );
}
