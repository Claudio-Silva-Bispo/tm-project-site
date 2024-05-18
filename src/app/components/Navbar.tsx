
import imagem from '../../../public/assets/Navbar/logo-empresa-tratado.png'

export default function Navbar(){
    
    return(

        <header className="p-4">
            
            <div className="container flex justify-between h-16 mx-auto">

                <img src="/assets/Navbar/logo-empresa-tratado.png" alt="Logo da empresa" />

                
                <ul className="items-stretch hidden space-x-3 md:flex">

                    <li className="flex">
                        <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">About</a>
                    </li>

                    <li className="flex">
                        <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Services</a>
                    </li>

                    <li className="flex">
                        <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border- dark:text-violet-600 dark:border-violet-600">Contact</a>
                    </li>

                    <li className="flex">
                        <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Quote</a>
                    </li>

                    <li className="flex">
                        <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Testimonials</a>
                    </li>

                </ul>

                <button className="flex justify-end p-4 md:hidden">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>

                </button>

            </div>

        </header>
    );
}