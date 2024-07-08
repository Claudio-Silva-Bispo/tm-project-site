import React, { useState } from 'react';
import Image from 'next/image';

/* Imagens dos cards */
import imagem1 from '../../public/assets/CarroselServices/_2misso_Address.png';
import imagem2 from '../../public/assets/CarroselServices/_2misso_Storytelling.png';
import imagem3 from '../../public/assets/CarroselServices/_2misso_Alarm.png';

/* Icones das setas */
import imagem4 from '../../public/assets/CarroselServices/_2misso_arrowfoward.png';
import imagem5 from '../../public/assets/CarroselServices/_2misso_arrowback.png';

/* Importações das imagens */
import imagem6 from '../../public/assets/CarroselServices/AboutServices/cozinha-antes.jpg';
import imagem7 from '../../public/assets/CarroselServices/AboutServices/cozinha-depois.jpg';
import imagem8 from '../../public/assets/CarroselServices/AboutServices/banheiro-antes.jpg';
import imagem9 from '../../public/assets/CarroselServices/AboutServices/banheiro-depois.jpg';
import imagem10 from '../../public/assets/CarroselServices/AboutServices/fogao-antes.jpg';
import imagem11 from '../../public/assets/CarroselServices/AboutServices/fogao-depois.jpg';
import imagem12 from '../../public/assets/CarroselServices/AboutServices/geladeira-antes.jpg';
import imagem13 from '../../public/assets/CarroselServices/AboutServices/geladeira-depois.jpg';
import imagem14 from '../../public/assets/CarroselServices/AboutServices/pia-antes.jpg';
import imagem15 from '../../public/assets/CarroselServices/AboutServices/pia-depois.jpg';



export default function CarroselServices() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 10;

  const slides = [
    {
      image: imagem6.src,
      text: 'Ensure a spotless and healthy environment with our high-standard cleaning services.'
    },
    {
      image: imagem7.src,
      text: 'Our team is trained to transform any space, providing a thorough and lasting clean.'
    },
    {
      image: imagem8.src,
      text: 'Excellence in every detail: thats how we raise the standard of cleanliness for your space.'
    },
    {
      image: imagem9.src,
      text: 'We exceed expectations with cleaning solutions that shine as much as your reputation.'
    },
    {
      image: imagem10.src,
      text: 'Dedicated to perfection, our cleaning services ensure a revitalized and welcoming environment.'
    },
    {
      image: imagem11.src,
      text: 'With cutting-edge technology and meticulous attention, we offer a superior cleaning experience.'
    },
    {
      image: imagem12.src,
      text: 'Cleaning that transforms: let us elevate your environment’s standard with services you can see and feel.'
    },
    {
      image: imagem13.src,
      text: 'Commitment to cleaning excellence: where every corner shines and every detail matters.'
    },
    {
      image: imagem14.src,
      text: 'We exceed expectations with cleaning solutions that shine as much as your reputation.'
    },
    {
      image: imagem15.src,
      text: 'We exceed expectations with cleaning solutions that shine as much as your reputation.'
    }
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (

    <div className="bg-[#F5EAE8] relative mx-auto w-full min-h-screen flex flex-col items-center text-white" id='carrosel-service'>
      

      <h1 className='md:hidden font-montserrat font-extrabold text-6xl pt-[130px] p-10 text-[#F1A027] leading-[90%]'>conheça um pouco <br /> sobre nossa <br /> missão</h1>

      <div className="flex flex-col md:flex-row items-center justify-center w-full mt-20  md:pt-0 space-y-10 md:space-y-0 md:space-x-10 relative">
        
        <div className=" w-[300px] md:w[350px] h-[357px] bg-white bg-opacity-10 border border-white rounded-[40px] p-4 flex flex-col items-center">
          
          <Image className="w-[80px] h-[80px] object-cover" src={imagem1.src} alt="Address" width={80} height={80} />
          <h2 id="text13" tabIndex={13}  className="mt-[47px] text-gray-800 font-montserrat font-bold text-[20px]">Agility in Cleaning</h2>
          <p id="text14" tabIndex={14}  className="mt-[12px] text-center text-gray-900 font-medium text-[14px] leading-[20px]">
          Ensure efficient cleaning of your space quickly. Our service allows you to swiftly mark the location that requires cleaning and notify our team with just a few clicks.
          </p>
        </div>

        <div className="w-[300px] md:w[350px] h-[357px] bg-white bg-opacity-10 border border-white rounded-[40px] p-4 flex flex-col items-center">
          <Image className="w-[80px] h-[80px] object-cover" src={imagem2.src} alt="Alarm" width={80} height={80} />
          <h2 id="text15" tabIndex={15}  className="mt-[47px] text-gray-800  font-bold text-[20px]">Stay Informed</h2>
          <p className="mt-[12px] text-center text-gray-800  font-montserrat font-medium text-[14px] leading-[20px]">
          Receive real-time updates on the status of the cleaning and scheduled special maintenance events. Stay informed about all actions that ensure the excellence and comfort of your environment.
          </p>
        </div>

        <div className="w-[300px] md:w[350px] h-[357px]  bg-white bg-opacity-10 border border-white rounded-[40px] p-4 flex flex-col items-center">
          <Image className="w-[80px] h-[80px] object-cover" src={imagem3.src} alt="Storytelling" width={80} height={80} />
          <h2 id="text16" tabIndex={16}  className="mt-[47px] text-gray-800 font-montserrat font-bold text-[20px]">Continuous Improvement</h2>
          <p id="text17" tabIndex={17}  className="mt-[12px] text-center text-gray-800 font-montserrat font-medium text-[14px] leading-[20px]">
          We value your feedback on our services. Share your experiences and suggestions so we can continue to improve and raise the standard of cleanliness and comfort in your environments.
          </p>
        </div>
      </div>

      <div className="relative w-full md:w-[95%] h-auto mt-20 md:h-[600px] p-4 md:p-0 mb-20">
        
        <div className="md:block hidden">

          <Image className="absolute object-cover rounded-xl w-full h-full opacity-90" src={slides[currentSlide].image} alt="carousel image" width={1400} height={800} />

          <div className="absolute w-full h-full flex justify-between items-center p-4">
            
            <button onClick={handlePrev} className="bg-white bg-opacity-50 p-2 rounded-full">
              <Image src={imagem5.src} alt="arrow back" width={40} height={40} />
            </button>

            <button onClick={handleNext} className="bg-white bg-opacity-50 p-2 rounded-full">
              <Image src={imagem4.src} alt="arrow forward" width={40} height={40} />
            </button>

          </div>
        </div>

        <p id="text18" tabIndex={18}  className="w-full bg-black bg-opacity-30 md:bg-opacity-10 text-white text-center py-6 font-montserrat text-[18px] md:text-[24px] font-medium leading-[27px] md:leading-[36px] mt-4 md:absolute md:bottom-0 md:mt-0 p-5 h-86 md:h-60">
          {slides[currentSlide].text}
        </p>
        
        <div className="flex justify-center mt-4 md:hidden">
          
          <button onClick={handlePrev} className="bg-[#20A19A] p-2 rounded-full mx-2">
            <Image src={imagem5.src} alt="arrow back" width={40} height={40} />
          </button>

          <button onClick={handleNext} className="bg-[#20A19A] p-2 rounded-full mx-2">
            <Image src={imagem4.src} alt="arrow forward" width={40} height={40} />
          </button>

        </div>
      </div>

    </div>
  );
}