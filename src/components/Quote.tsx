

export default function Quote(){
    return(

        <section className="bg-cinzacinco" id="Quote">
            
            <div className="container max-w-5xl md:px-4 py-12 mx-auto">
                
                <div className="grid gap-4 mx-4 sm:grid-cols-12">
                    
                    <div className="col-span-12 sm:col-span-3">
                        
                        <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-primeira">

                            <h3 className="text-4xl font-semibold text-white uppercase mb-5">Request a Quote for Our Cleaning Services</h3>

                            <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-600">Simple and Quick</span>
                        </div>

                        <div className="flex justify-center items-center w-full md:justify-start mb-10 md:mb-0">
                            <a href="#" className="px-8 py-3 text-lg font-semibold rounded bg-white hover:bg-terceira hover:text-white">Get a Quote Now</a>
                        </div>

                    </div>

                    <div className="relative col-span-12 md:px-4 md:space-y-6 sm:col-span-9">
                        
                        <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300">
                            
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-primeira">
                                
                                <h3 className="text-xl font-semibold tracking-wide uppercase">Start filling out the form</h3>

                                <time className="text-xs tracking-wide uppercase dark:text-gray-600">Step One</time>

                                <p className="mt-3">Fill out the form to get a detailed and personalized quote for your cleaning needs. Our team is ready to provide effective and tailored solutions for your space, ensuring clean and healthy environments.</p>
                                
                            </div>

                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-primeira">
                                
                                <h3 className="text-xl font-semibold tracking-wide uppercase">Define the type of service</h3>

                                <time className="text-xs tracking-wide uppercase dark:text-gray-600">Step Two</time>

                                <p className="mt-3">Each service is performed with attention to detail and high-quality products, including vegan and sustainable options. We guarantee that your space will be impeccable and ready for use. Request your quote now and discover how we can transform your environment.!</p>

                                <h4>Define the services as:</h4>

                                <p>
                                    Regular Cleaning,
                                    Deep Cleaning,
                                    Move-Out Cleaning,
                                    Post-Construction Cleaning,
                                    Special Event Cleaning
                                </p>
                                    

                            </div>

                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-primeira">
                                
                                <h3 className="text-xl font-semibold tracking-wide uppercase">Choose the day and time</h3>
                                
                                <time className="text-xs tracking-wide uppercase dark:text-gray-600">Step Three</time>
                                
                                <p className="mt-3">Each service is performed with attention to detail and high-quality products, including vegan and sustainable options. We guarantee that your space will be impeccable and ready for use. Request your quote now, with preference and definition of day and time, and discover how we can transform your environment!</p>
                            </div>

                        

                        </div>

                    </div>

                    
                </div>

            </div>

        </section>

    );
}