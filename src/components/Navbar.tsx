'use client'

import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activeHash, setActiveHash] = useState('');
  const router = useRouter();

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setActiveHash(window.location.hash);
    }
  }, [router.asPath]);

  const handleScrollToSection = (hash:any) => {
    setShowMobileMenu(false);
    setActiveHash(hash);

    if (hash.startsWith('/')) {
      // Navigate to the page if the hash is a path
      router.push(hash);
    } else if (router.pathname === '/') {
      // Scroll to the section if on the same page
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to the homepage and scroll to the section
      router.push(`/${hash}`);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="container flex justify-between h-16 mx-auto p-4">
        <img src="/assets/Navbar/logo-oficial.png" alt="Logo da empresa"/>

        <ul className="items-stretch hidden space-x-3 md:flex font-manrope">
          {[
            { label: 'Home', hash: '/' },
            { label: 'About', hash: '#about' },
            { label: 'Services', hash: '#service-offered' },
            { label: 'Contact', hash: '#contact' },
            { label: 'Quote', hash: '#form-quote' },
            { label: 'Feedback', hash: '#form-feedback' },
            { label: 'Testimonials', hash: '#testimonials' },
            { label: 'Dashboard', hash: '/LoginDashboard' }
          ].map((item) => (
            <li key={item.hash} className="flex">
              <Link href={item.hash} legacyBehavior>
                <a
                  className={`flex items-center px-4 -mb-1 border-b-2 ${
                    activeHash === item.hash ? 'border-[#F3AACB] text-[#F3AACB]' : 'dark:border-transparent'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollToSection(item.hash);
                  }}
                >
                  {item.label}
                </a>
              </Link>
            </li>
          ))}
        </ul>

        <button className="flex justify-end p-4 md:hidden" onClick={toggleMobileMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {showMobileMenu && (
        <div className="mobile-menu flex flex-col h-screen w-full absolute bg-white p-6">
          <div className="space-y-3">
            <div className="flex-1">
              <ul className="pt-2 pb-4 space-y-1 text-sm">
                {[
                  { label: 'Home', hash: '/' },
                  { label: 'About', hash: '#about' },
                  { label: 'Services', hash: '#service-offered' },
                  { label: 'Contact', hash: '#contact' },
                  { label: 'Quote', hash: '#form-quote' },
                  { label: 'Feedback', hash: '#form-feedback' },
                  { label: 'Social Media', hash: '#SocialMedia' },
                  { label: 'Testimonials', hash: '#testimonials' },
                  { label: 'Dashboard', hash: '/LoginDashboard' }
                ].map((item) => (
                  <li key={item.hash} className="rounded-sm">
                    <a
                      href={item.hash}
                      className="flex items-center p-2 space-x-3 rounded-md"
                      onClick={(e) => {
                        e.preventDefault();
                        handleScrollToSection(item.hash);
                      }}
                    >
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
                <li className="rounded-sm" onClick={toggleMobileMenu}>
                  <a href="#" className="flex items-center p-2 space-x-3 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-600">
                      <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                      <rect width="32" height="64" x="256" y="232"></rect>
                    </svg>
                    <span>Close</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
