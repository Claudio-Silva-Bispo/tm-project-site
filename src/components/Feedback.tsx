'use client'

import { useState } from 'react';

interface FormData {
    nome: string;
    email: string;
    nota: number;
    mensagem: string;
}

export default function Feedback() {
    const [formulario, setFormulario] = useState<FormData>({
        nome: '',
        email: '',
        nota: 0,
        mensagem: ''
    });

    const handleSetRating = (index: number) => {
        setFormulario({ ...formulario, nota: index + 1 });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormulario({ ...formulario, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validação básica dos dados
        if (!formulario.nome || !formulario.email || !formulario.mensagem) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        console.log('Enviando formulário:', formulario);

        try {
            const response = await fetch('https://tmservicescleaning.com/api/criarFeedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formulario),
            });

            if (response.ok) {
                alert('Feedback sent successfully.');
                setFormulario({
                    nome: '',
                    email: '',
                    nota: 0,
                    mensagem: ''
                });
            } else {
                const errorData = await response.json();
                alert(`Error sending feedback.: ${errorData.message || 'Unknown error.'}`);
            }
        } catch (error) {
            console.error('Error sending feedback.:', error);
            alert('Error sending feedback. Please try again later.');
        }
    };

    type StarIconProps = {
        filled: boolean;
        onClick: () => void;
    };

    const StarIcon = ({ filled, onClick }: StarIconProps) => (
        <svg
            onClick={onClick}
            className={`h-[50px] w-[80px] cursor-pointer ${filled ? 'text-yellow-500' : 'text-[#D5E0B5]'}`}
            fill={filled ? 'currentColor' : 'none'}
            viewBox="0 0 24 24"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.073 6.36h6.704c.969 0 1.371 1.24.588 1.81l-5.396 3.928 2.073 6.36c.3.921-.755 1.683-1.54 1.193l-5.396-3.928-5.396 3.928c-.785.49-1.84-.272-1.54-1.193l2.073-6.36-5.396-3.928c-.783-.57-.38-1.81.588-1.81h6.704l2.073-6.36z"
            />
        </svg>
    );

    return (
        <div className="bg-[#FFFFF] min-h-full md:flex md:justify-center md:content-center " id='form-feedback'>
            <div className="w-[100%] md:pl-10 flex flex-col justify-center gap-10 mt-20 p-10">
                <h1 className="text-6xl font-bold tracking-tight text-[#064E8B] uppercase">Your opinion is essential to us!</h1>
                <h2 className="mt-2 text-3xl leading-8 text-gray-800">Complete the form available here and let your voice be heard!</h2>
                <p className="mt-2 text-lg leading-8 text-gray-800">
                    By responding to the survey, you have the opportunity to share your ideas, suggestions, and impressions. This will help us improve our services, benefiting you directly. By reserving spaces for professional activities, you can take the time to organize meetings with friends, enjoy valuable moments with family, or explore new knowledge and discoveries.
                </p>
            </div>

            <div className="w-[100%] bg-[#FFFFF] p-10">
                <form
                    className="w-[100%] md:w-[80%] mx-auto bg-[#B3CEE5] rounded-lg p-10 grid-cols-* md:mt-20"
                    name="formulario-feedback"
                    method="post"
                    data-netlify="true"
                    hidden
                    onSubmit={handleSubmit}
                >
                    <div className="">
                        <label htmlFor="nome" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                        <input
                            name="nome"
                            type="text"
                            id="nome"
                            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs"
                            autoComplete="nome"
                            value={formulario.nome}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mx-auto mt-10">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                        <input
                            name="email"
                            type="email"
                            id="email"
                            aria-describedby="helper-text-explanation"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                            placeholder="name@gmail.com"
                            autoComplete="email"
                            value={formulario.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="rating flex justify-center content-center mt-10">
                        <input
                            className=""
                            type="number"
                            name="nota"
                            value={formulario.nota}
                            hidden
                            required
                            readOnly
                        />
                        {[...Array(5)].map((_, index) => (
                            <StarIcon key={index} filled={index < formulario.nota} onClick={() => handleSetRating(index)} />
                        ))}
                    </div>

                    <div className="mx-auto mt-20">
                        <label className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
                        <textarea
                            name="mensagem"
                            id="message"
                            rows={8}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                            placeholder="Leave a comment..."
                            value={formulario.mensagem}
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    <div className="flex justify-center text-center mt-10">
                        <div className="rounded-md bg-[#EB9AC0] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#FDEAF2] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-[80%] md:w-[60%]">
                            <button type="submit">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
