import { HeartIcon, GlobeAltIcon, ClockIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

/* Importação das imagens */
import Image from 'next/image';
import image from '../../public/assets/About/logo-about-company.png'

const features = [
  {
    name: 'Connection with the Community',
    description:'We have deep roots in Kirkland, fully understanding what our neighbors expect and need.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Dedication to Excellence',
    description:'We are committed to delivering not just cleaning, but excellence in every service, using advanced methods and high-quality products.',
    icon: HeartIcon,
  },
  {
    name: 'Flexible Scheduling',
    description:'We recognize the hustle and bustle of daily life. Thats why we offer service from Monday to Saturday, allowing you to find the perfect time for us to come by.',
    icon: ClockIcon,
  },
]

export default function About() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32" id='about'>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">About us</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Our team, more than professionals, are people dedicated to transforming places into true havens of tranquility, equipped for both everyday cleaning and thorough, deep cleanings.

              <br />
              <br />
                
              Choose TM Service Cleaning to take care of your space. We are here to help you live better.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          
          <Image
            src={image.src}
            alt="Logo da empresa"
            className="w-[20rem] max-w-none rounded-xl  ring-gray-400/10 sm:w-[32rem] md:-ml-4 lg:-ml-0 transition-transform duration-500 hover:translate-x-2 hover:translate-y-2 "
            width={500}
            height={500}
            objectFit="cover"
          />
        </div>

        <div className="mt-10 flex flex-col items-center justify-center md:items-start gap-y-5">

          <p className="mt-6 text-lg leading-8 text-gray-600">Schedule your visit with us now and feel the difference of a service designed for you. We are available to discuss how we can meet your needs.</p>
          
          <Link className='rounded-md bg-[#F3AACB] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#B3CEE5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' href="/#form-quote" >Request your Free Quote</Link>
          
        </div>

      </div>
    </div>
  )
}
