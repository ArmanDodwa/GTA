import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Navbar from "./selection/Navbar";
import Hero from "./selection/Hero";
import FirstVideo from "./selection/FirstVideo";
import Jason from "./selection/Jason";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return(
    <main>
      <Navbar />
      <Hero />
      <FirstVideo />
      <Jason/>
    </main>
  )
};

export default App;
