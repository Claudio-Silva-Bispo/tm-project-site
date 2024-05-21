
/* Importação dos Componentes */
import HomePage from "../components/Home";
import SocialMedia from "../components/SocialMedia";
import About from "../components/About";
import Contact from "../components/Contact"
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Feedback from "../components/Testimonials";
import DetailsFeedback from "../components/DetailsFeedback";
import FormFeedback from "../components/FormFeedback";
import Quote from "../components/Quote";
import FormQuote from "../components/FormQuote";

export default function Home() {
  return (
    <div>
      <HomePage/>
      <About/>
      <SocialMedia/>
      <AboutUs/>
      <Contact/>
      <Services/>
      <DetailsFeedback/>
      <Feedback/>
      <FormFeedback/>
      <Quote/>
      <FormQuote/>

    </div>
  );
}
