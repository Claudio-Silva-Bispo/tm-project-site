

export default function DetailsFeedback() {
    return(

        <section className="p-6 bg-gray-200">
            
            <div className="container mx-auto">
                
                <span className="block mb-2 text-xs font-medium tracking-widest text-center uppercase dark:text-violet-600">How it works</span>
                <h2 className="text-5xl font-bold text-center dark:text-gray-900">Fill out our feedback form</h2>
                
                <div className="grid gap-6 my-16 lg:grid-cols-3">
                    
                    <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-50">
                        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-600 dark:text-gray-50">1</div>
                        <p className="text-2xl font-semibold">
                        <b>Enter</b> your name and email.
                        </p>
                    </div>

                    <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-50">
                        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-600 dark:text-gray-50">2</div>
                        <p className="text-2xl font-semibold">
                            <b>Evaluation: </b>Write your evaluation about our services.
                        </p>
                    </div>

                    <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-50">
                        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-600 dark:text-gray-50">3</div>
                        <p className="text-2xl font-semibold">
                            <b>Rating:</b> Select the number of stars for your evaluation (1 for bad, 5 for excellent).
                        </p>
                    </div>

                </div>
            
            </div>

            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-center font-manrope">
                            
                            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-white ">Rate Now</a>

                            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded text-white bg-terceira">Use Google</a>
            </div>


        </section>
    );
}