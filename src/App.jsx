import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Navbar from "./selection/Navbar";
import Hero from "./selection/Hero";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return(
    <main>
      <Navbar />
      <Hero />
    </main>
  )
};

export default App;
