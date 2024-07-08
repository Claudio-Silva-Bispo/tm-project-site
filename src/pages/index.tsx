
/* Importação dos Componentes */
import HomePage from "../components/Home";
import About from "../components/About";
import AboutService from "@/components/AboutService";
import Contact from "../components/Contact";
import Services from "@/components/Services";
import CarroselServices from "@/components/CarroselServices";
import Quote from "@/components/Quote";
import Feedback from "@/components/Feedback";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
      <HomePage/>
      <About/>
      <AboutService/>
      <Contact/>
      <Services/>
      <CarroselServices/>
      <Quote/>
      <Feedback/>
      <Testimonials/>
    </div>
  );
}
