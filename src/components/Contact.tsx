'use client'

import { useState } from 'react';

interface FormData {
    nome: string;
    email: string;
    telefone: string;
    mensagem: string;
}

export default function Contact(){

    const [formulario, setFormulario] = useState<FormData>({
        nome: '',
        email: '',
        telefone: '',
        mensagem: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormulario({ ...formulario, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log('Enviando formulário:', formulario);

        try {
            const response = await fetch('https://tmservicescleaning.com/api/criarContato', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formulario),
            });

            if (response.ok) {
                alert('Contact sent successfully');
                setFormulario({
                    nome: '',
                    email: '',
                    telefone: '',
                    mensagem: ''
                });
            } else {
                alert('Error sending contact.');
            }
        } catch (error) {
            console.error('Error sending contact:', error);
            alert('Error sending contact.');
        }
    };


    return(
        
        <section className="py-6 bg-[#F3AACB]" id="contact">
            
            <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x mt-10 md:mt-0">

                <div className="py-6 md:py-0 md:px-6 flex flex-col justify-center">
                    
                    <h1 className="text-6xl font-bold uppercase mb-10 md:mb-0 text-white">Get in touch</h1>
                    
                    <p className="pt-2 pb-4 font-manrope">Fill in the form to start a conversation</p>
                    
                    <div className="space-y-4">
                        
                        <p className="flex items-center font-manrope">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                            </svg>
                            <span>United States, Washington</span>
                        </p>

                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6 font-manrope">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                            </svg>
                            <span>+1 (425) 380-1808</span>
                        </p>
                        <p className="flex items-center font-manrope">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>

                            <span>Tm.housecleaning24@gmail.com</span>
                        </p>
                    </div>
                </div>

                <form 
                className="flex flex-col py-6 space-y-6 md:py-5 md:px-6"
                id='formulario-contato'
                name='formulario-contato'
                onSubmit={handleSubmit}
                data-netlify="true">
                    
                    <label className="block">
                        
                        <span className="mb-5 font-manrope">Name</span>
                        
                        <input 
                        id='nome'
                        name='nome'
                        type="text" 
                        placeholder="Write your name here" 
                        className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 p-2 font-manrope"
                        value={formulario.nome}
                        onChange={handleChange} />

                    </label>

                    <label className="block">

                        <span className="mb-2 font-manrope">Email address</span>
                        
                        <input
                        id='email'
                        name='email'
                        type="email" 
                        placeholder="Your-email@gmail.com" 
                        className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 p-2 font-manrope"
                        value={formulario.email}
                        onChange={handleChange} />

                    </label>

                    <label className="block">

                        <span className="mb-2 font-manrope">Phone number</span>
                        
                        <input 
                        id='telefone'
                        name='telefone'
                        type="number" 
                        placeholder="XXX-XXX-XXXX" 
                        className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 p-2 font-manrope"
                        value={formulario.telefone}
                        onChange={handleChange} />

                    </label>
                    
                    <label className="block">

                        <span className="mb-1 font-manrope">Message</span>
                        
                        <textarea  
                        id='mensagem'
                        name='mensagem'
                        className="block w-full rounded-md focus:ring focus:ring-opacity-75"
                        value={formulario.mensagem}
                        onChange={handleChange}></textarea>

                    </label>

                    <button type="submit" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-gray-50 text-black font-manrope w-full">Submit</button>

                </form>

            </div>

        </section>
    );
}