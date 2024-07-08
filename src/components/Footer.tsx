
/* Instalar FontAwesome
npm install --save @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome

*/
import React from 'react';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import Image from 'next/image';


export default function Footer() {

    return(
        
        <footer className="bg-[#EB9AC0] font-sans">
            
            <div className="container px-6 py-12 mx-auto">
                
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                    <div className="sm:col-span-1">
                        <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl">Follow our company on social media platforms.</h1>

                        <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                    
                        <Image src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" width="30" height="30" alt="instagram" className='mb-5'></Image>

                        </div>

                        <Link href="https://www.instagram.com/tm_housecleaning?igsh=MjgybWFhMWdnOTM%3D&utm_source=qr" className='text-sm text-white md:text-black'>Click here to visit our Instagram page.</Link>

                        
                    </div>

                    <div>
                        <p className="font-semibold text-gray-800">Company</p>

                        <div className="flex flex-col items-start mt-5 space-y-2">
                            
                            <p className="text-gray-600 transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500"><Link href="/About">About</Link></p>

                            <p className="text-gray-600 transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500"><Link href="/FormQuote">Request your Quote</Link></p>

                            <p className="text-gray-600 transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500"><Link href="/Services">Services</Link></p>

                            <p className="text-gray-600 transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500"><Link href="/About">Business hours</Link></p>

                            <p className="text-gray-600 transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500"><Link href="/FormFeedback">Feedback</Link></p>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold text-gray-800">Services</p>

                        <div className="flex flex-col items-start mt-5 space-y-2">
                            
                            <p className="text-gray-600 transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500">Regular Cleaning</p>
                            
                            <p className="text-gray-600 transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500">Deep Cleaning</p>
                            
                            <p className="text-gray-600 transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500">Move-in & Move-Out</p>
                            
                            <p className="text-gray-600 transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500">Commercial</p>
                            
                            <p className="text-gray-600 transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500">Vacation Home</p>
                            
                            <p className="text-gray-600 transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500">Event</p>

                        </div>
                    </div>

                    <div>
                        <p className="font-semibold text-gray-800">Contact</p>

                        <div className="flex flex-col items-start mt-5 space-y-2">
                            
                            <p className="text-gray-600 transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500">Phone number:+1 (425) 380-1808</p>
                            
                            <p className="text-gray-600 transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500">
                                
                            <a className="rede_social sms" href="sms:+4253801808"/>Message: +1 (425) 380-1808</p>
                            
                            <p className="text-gray-600 transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500">Mail: Tm.housecleaning24@gmail.com</p>
                            
                        </div>
                    </div>

                </div>
                
                <hr className="my-6 border-gray-200 md:my-8 h-2" />
                
                <p className="font-title text-center md:text-lg md:p-4 ">&copy; 2024 TM Cleaning. All rights reserved.</p>
            </div>
        </footer>

    );
}