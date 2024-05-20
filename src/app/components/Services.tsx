

export default function Services(){
    return(

        <section className="p-4 lg:p-8" id="Services">

            <div className="container mx-auto space-y-12 mt-20">

                <div className="font-bold text-6xl uppercase">
                    <h1>About Our Services</h1>
                </div>

                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                    
                    <img src="/assets/Services/Imagem1.jpg" alt="Imagem sobre nossos serviços" className="h-80 dark:bg-gray-500 aspect-video" />
                    
                    <div className="flex flex-col justify-center flex-1 p-6">
                        
                        <span className="text-xs uppercase">Regular Cleaning</span>
                        
                        <h3 className="text-3xl font-bold">Transform your space with our regular cleaning: a cleaner and healthier environment, every day!</h3>
                        
                        <p className="my-6">Regular cleaning is essential for maintaining a clean and healthy environment. By cleaning regularly, we remove dirt, dust, and germs that can accumulate over time.</p>

                        <button type="button" className="self-start">Get a quote now!</button>

                    </div>

                </div>

                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                    
                    <img src="/assets/Services/Imagem2.jpg" alt="Imagem sobre nossos serviços" className="h-80 dark:bg-gray-500 aspect-video" />
                    
                    <div className="flex flex-col justify-center flex-1 p-6">
                        
                        <span className="text-xs uppercase">Deep Cleaning</span>
                        
                        <h3 className="text-3xl font-bold">Make every corner spotless with our deep cleaning: perfection in every detail!</h3>
                        
                        <p className="my-6 dark:text-gray-600">Deep cleaning is an important task to keep things organized and tidy. It means giving everything a thorough scrub to make sure it’s super clean.</p>
                        
                        <button type="button" className="self-start">Get a quote now!</button>

                    </div>
                </div>

                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                    
                    <img src="/assets/Services/Imagem3.jpg" alt="Imagem sobre nossos serviços" className="h-80 aspect-video" />
                    
                    <div className="flex flex-col justify-center flex-1 p-6">
                        
                        <span className="text-xs uppercase">Move-Out Cleaning</span>
                        
                        <h3 className="text-3xl font-bold">Move out worry-free with our move-out cleaning: leave everything spotless for the next occupants!</h3>
                        
                        <p className="my-6">Move-out cleaning is an essential step when leaving a home. It involves thorough cleaning to ensure the place is spotless for the next occupants.</p>

                        <button type="button" className="self-start">Get a quote now!</button>

                    </div>
                </div>

                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                    
                    <img src="/assets/Services/Imagem4.jpg" alt="Imagem sobre nossos serviços" className="h-80 dark:bg-gray-500 aspect-video" />
                    
                    <div className="flex flex-col justify-center flex-1 p-6">
                        
                        <span className="text-xs uppercase">Post-Construction Cleaning</span>
                        
                        <h3 className="text-3xl font-bold">Unveil the beauty of your new space with our post-construction cleaning: the finishing touch for a flawless shine!</h3>
                        
                        <p className="my-6 dark:text-gray-600">After the construction work is done, it's time for the cleanup! Post-construction cleaning is essential to make the place shine. Dust, debris, and leftover materials need to be removed to reveal the beauty of the newly built or renovated space.</p>

                        <button type="button" className="self-start">Get a quote now!</button>

                    </div>
                </div>

                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                    
                    <img src="/assets/Services/Imagem5.jpg" alt="Imagem sobre nossos serviços" className="h-80 aspect-video" />
                    
                    <div className="flex flex-col justify-center flex-1 p-6">
                        
                        <span className="text-xs uppercase">Special Event Cleaning</span>
                        
                        <h3 className="text-3xl font-bold">Leave the cleaning to us and enjoy your special event: shine and perfection from start to finish!</h3>
                        
                        <p className="my-6">Special events bring joy and excitement, but they also bring mess. That's where special event cleaning steps in. Whether it's a wedding, a party, or a corporate gathering, our team ensures everything sparkles and shines before, during, and after the occasion.</p>

                        <button type="button" className="self-start">Get a quote now!</button>

                    </div>
                </div>

                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                    
                    <img src="/assets/Services/Imagem6.jpg" alt="Imagem sobre nossos serviços" className="h-80 dark:bg-gray-500 aspect-video" />
                    
                    <div className="flex flex-col justify-center flex-1 p-6">
                        
                        <span className="text-xs uppercase">Vegan Home Solutions</span>
                        
                        <h3 className="text-3xl font-bold">Clean and shining shower with vegan solutions: kindness and efficiency for your home!</h3>
                        
                        <p className="my-6 dark:text-gray-600">Keeping your shower clean doesn't have to mean using harsh chemicals. Vegan home solutions offer gentle yet effective ways to keep your shower shining.</p>

                        <button type="button" className="self-start">Get a quote now!</button>

                    </div>
                </div>

            </div>

        </section>
    );
}