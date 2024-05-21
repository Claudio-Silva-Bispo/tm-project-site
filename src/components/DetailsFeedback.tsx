

export default function DetailsFeedback() {
    return(

        <section className="p-6 bg-gray-200">
            
            <div className="container mx-auto mt-20">
                
                <span className="block mb-5 text-xs font-medium tracking-widest text-start md:text-center uppercase text-terceira md:mb-2">How it works</span>

                <h2 className="text-5xl font-bold text-start md:text-center uppercase">Fill out our feedback form</h2>
                
                <div className="grid gap-6 my-16 lg:grid-cols-3">
                    
                    <div className="flex flex-col md:p-8 space-y-4 rounded-md">
                        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-primeira text-gray-50">1</div>
                        <p className="text-2xl font-semibold">
                        <b>Enter</b> your name and email.
                        </p>
                    </div>

                    <div className="flex flex-col md:p-8 space-y-4 rounded-md">
                        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-primeira text-gray-50">2</div>
                        <p className="text-2xl font-semibold">
                            <b>Evaluation: </b>Write your evaluation about our services.
                        </p>
                    </div>

                    <div className="flex flex-col md:p-8 space-y-4 rounded-md">
                        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-primeira text-gray-50">3</div>
                        <p className="text-2xl font-semibold">
                            <b>Rating:</b> Select the number of stars for your evaluation (1 for bad, 5 for excellent).
                        </p>
                    </div>

                </div>
            
            </div>

            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-center font-manrope mb-20 md:mb-0">
                            
                            <a rel="noopener noreferrer" href="#FormFeedback" className="px-8 py-3 text-lg font-semibold rounded bg-white hover:bg-terceira hover:text-white text-center">Rate Now</a>

                            <a rel="noopener noreferrer" href="https://g.co/kgs/5WL22RM" target="_blank" className="px-8 py-3 text-lg font-semibold border rounded text-white text-center bg-primeira hover:bg-white hover:text-black">Use Google</a>
            </div>


        </section>
    );
}