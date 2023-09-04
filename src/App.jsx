import About from "./Components/About/About";
import Hero from "./Components/Hero/Hero";
import Project from "./Components/Project/Project";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="font-all px-10 md:px-14 pt-3 bg-white dark:bg-[#232946] snap-y snap-mandatory ">
      <Navbar />
      <section id="home" className="snap-center">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="portfolio">
        <Project />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
