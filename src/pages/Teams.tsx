import React from 'react';
import Image from 'next/image';

const teamMembers = [
  {
    image: '/assets/Teams/imagem1.jpeg',
    category: 'Quality',
    date: '01',
    title: 'Meet our team that ensures quality in every detail.',
  },
  {
    image: '/assets/Teams/imagem2.jpeg',
    category: 'Focus',
    date: '02',
    title: 'Absolute focus on the satisfaction and well-being of our clients.',
  },
  {
    image: '/assets/Teams/imagem3.jpeg',
    category: 'Cleanliness',
    date: '03',
    title: 'Excellence in cleanliness, providing an impeccable environment.',
  },
  {
    image: '/assets/Teams/imagem4.jpeg',
    category: 'Care',
    date: '04',
    title: 'Care and dedication in every task we perform.',
  },
  {
    image: '/assets/Teams/imagem5.jpeg',
    category: 'Organization',
    date: '05',
    title: 'Organization and efficiency in all our services.',
  },
  {
    image: '/assets/Teams/imagem6.jpeg',
    category: 'Professionalism',
    date: '06',
    title: 'Professionalism that reflects in exceptional results.',
  },
  {
    image: '/assets/Teams/imagem7.jpeg',
    category: 'Trust',
    date: '07',
    title: 'Trust and security in every service provided.',
  },
  {
    image: '/assets/Teams/imagem8.jpeg',
    category: 'Innovation',
    date: '08',
    title: 'Constant innovation for better cleaning solutions.',
  },
];

export default function Teams() {
  return (
    <div className="p-10 mx-auto dark:bg-gray-100 dark:text-gray-800 mt-20" id="Teams">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Meet Our Team</h1>
        <p className="mt-4 text-lg">Our team works together to provide efficient and high-quality services.</p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-6 lg:grid-rows-2">
        {teamMembers.map((member, index) => (
          <div key={index} className="relative flex flex-col items-end justify-end w-full text-left bg-center bg-cover cursor-pointer min-h-[600px] group">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-800 opacity-70"></div>
            <Image
              src={member.image}
              alt={member.category}
              layout="fill"
              objectFit="cover"
              className="absolute inset-0"
            />
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-5">
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-3 py-2 text-xs font-semibold tracking-wider uppercase hover:underline dark:text-gray-800 dark:bg-violet-600"
              >
                {member.category}
              </a>
              <div className="flex flex-col justify-start text-center text-white">
                <span className="text-3xl font-semibold leading-none tracking-wide">
                  {member.date.split(' ')[0]}
                </span>
                <span className="leading-none uppercase">{member.date.split(' ')[1]}</span>
              </div>
            </div>
            <h2 className="z-10 p-5">
              <a
                rel="noopener noreferrer"
                href="#"
                className="font-medium text-md group-hover:underline text-white"
              >
                {member.title}
              </a>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
