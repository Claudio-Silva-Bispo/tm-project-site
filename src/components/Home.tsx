

export default function HomePage() {

    return (
        <div className="isolate px-6 pt-5 lg:px-8 mt-10 md:mt-0">
                
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{clipPath:'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',}}/>
                </div>
                
                <div className="mx-auto max-w-2xl py-10 sm:py-48 lg:py-25">
                
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 ">
                        Conheça sobre nossa empresa.{' '}
                        <a href="/About" className="font-semibold text-[#F3AACB]">
                        
                        <span className="absolute inset-0" aria-hidden="true" />
                        Read more <span aria-hidden="true">&rarr;</span>
                        </a>
                        </div>
                    </div>
                
                    <div className="">

                        <h1 className="tracking-tight text-gray-900 sm:text-6xl uppercase text-left md:text-center animate-color-change text-4xl font-bold">
                        TM Service Cleaning
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600 md:text-center w-[80%] md:w-full ">
                        Welcome to TM Service Cleaning, where we take care of every corner of Kirkland and the surrounding area. We step in so you can relax and devote yourself to what really matters to you. With our heartfelt team, we ensure that every space of yours shines, leaving you with a sense of peace and more free time to enjoy life.
                        </p>
                    
                    <div className="mt-10 grid gap-5 md:flex md:items-center md:justify-center md:gap-x-6 w-[100%] text-center">
                        <a
                            href="/FormQuote"
                            className="rounded-md bg-[#EB9AC0] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#B3CEE5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-[70%] sm:w-[40%]"
                        >Request your quote
                            
                        </a>
                        <a href="/Services" className="text-sm font-semibold leading-6 text-gray-900 text-left ">Learn more about our services
                        <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
                </div>
                <div
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true"
                >
                <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                    clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
                </div>

        </div>

    );
}