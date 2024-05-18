
/* Importação dos Componentes */
import HomePage from "./components/Home";
import SocialMedia from "./components/SocialMedia";
import About from "./components/About";
import Contact from "./components/Contact"
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Feedback from "./components/Feedback";
import Quote from "./components/Quote";

export default function Home() {
  return (
    <div>
      <HomePage/>
      <SocialMedia/>
      <About/>
      <Contact/>
      <AboutUs/>
      <Services/>
      <Feedback/>
      <Quote/>

    </div>
  );
}
