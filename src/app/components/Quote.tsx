

export default function Quote(){
    return(

        <section className="bg-terceira">
            
            <div className="container max-w-5xl px-4 py-12 mx-auto">
                
                <div className="grid gap-4 mx-4 sm:grid-cols-12">
                    
                    <div className="col-span-12 sm:col-span-3">
                        
                        <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-violet-600">

                            <h3 className="text-4xl font-semibold text-white uppercase mb-5">Solicite um Orçamento para Nossos Serviços de Limpeza</h3>

                            <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-600">Simples e rápido</span>
                        </div>

                        <a href="#" className="px-8 py-3 text-lg font-semibold rounded bg-white w-40 hover:bg-violet-600">Cote agora</a>

                    </div>

                    <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                        
                        <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300">
                            
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-600">
                                
                                <h3 className="text-xl font-semibold tracking-wide">Inicie o preenchimento do formulário</h3>
                                <time className="text-xs tracking-wide uppercase dark:text-gray-600">Primeiro passo</time>
                                <p className="mt-3">Preencha o formulário para obter um orçamento detalhado e personalizado para suas necessidades de limpeza. Nossa equipe está pronta para fornecer soluções eficazes e adaptadas ao seu espaço, garantindo ambientes limpos e saudáveis.</p>
                                
                            </div>

                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-600">
                                
                                <h3 className="text-xl font-semibold tracking-wide">Defina o tipo de serviço</h3>

                                <time className="text-xs tracking-wide uppercase dark:text-gray-600">Segundo passo</time>

                                <p className="mt-3">Cada serviço é realizado com atenção aos detalhes e com produtos de alta qualidade, incluindo opções veganas e sustentáveis. Garantimos que seu espaço estará impecável e pronto para uso. Solicite seu orçamento agora e descubra como podemos transformar seu ambiente!</p>

                                <h4>Defina os serviços entre:</h4>

                                <p>
                                Limpeza Regular, 
                                Profunda, 
                                Limpeza de Mudança, 
                                Pós-Construção, 
                                Para Eventos Especiais
                                </p>
                                    

                            </div>

                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-600">
                                
                                <h3 className="text-xl font-semibold tracking-wide">Esolha o dia e horário</h3>
                                
                                <time className="text-xs tracking-wide uppercase dark:text-gray-600">Terceiro passo</time>
                                
                                <p className="mt-3">Cada serviço é realizado com atenção aos detalhes e com produtos de alta qualidade, incluindo opções veganas e sustentáveis. Garantimos que seu espaço estará impecável e pronto para uso. Solicite seu orçamento agora, com preferência e definição de dia e horário, e descubra como podemos transformar seu ambiente!</p>
                            </div>

                        

                        </div>

                    </div>

                    
                </div>

            </div>

        </section>

    );
}