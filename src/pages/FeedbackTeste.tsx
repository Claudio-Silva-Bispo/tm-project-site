import React, { useEffect, useState } from 'react';

interface Feedback {
    _id: string;
    nome: string;
    mensagem: string;
    nota: number;
    mostrar_tela: string;
}

export default function Testimonials() {
    const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/buscarFeedbacks')
            .then(response => response.json())
            .then((data: Feedback[]) => {
                const filteredFeedbacks = data.filter(feedback => feedback.mostrar_tela);  // Filtra apenas feedbacks com posição definida
                const sortedFeedbacks = filteredFeedbacks.sort((a: Feedback, b: Feedback) => a.mostrar_tela.localeCompare(b.mostrar_tela));
                setFeedbacks(sortedFeedbacks);
            })
            .catch(error => console.error('Erro ao buscar feedbacks:', error));
    }, []);

    const renderStars = (nota: number) => (
        Array.from({ length: nota }, (_, index) => (
            <span key={index} className="text-yellow-500">&#9733;</span> // Star icon
        ))
    );

    return (
        <section className="bg-primeira pb-10 md:pb-0 pt-20" id="Testimonials">
            <div className="container flex flex-col justify-start md:justify-center items-center mx-auto mb-10 md:p-8 md:px-10 pt-10">
                <h1 className="p-4 text-5xl font-semibold leading-none text-start md:text-center text-white uppercase mt-10 md:mt-0">What our customers are saying about us</h1>
            </div>

            <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10 bg-white">
                {feedbacks.map((feedback, index) => (
                    <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg" key={feedback._id}>
                        <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50 h-96">
                            <p className="relative px-6 py-1 text-md italic text-center dark:text-gray-800">
                                {feedback.mensagem}
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-primeira text-gray-50">
                            <p className="text-xl font-semibold leading-tight">{feedback.nome}</p>
                            <div className="flex mt-2">
                                {renderStars(feedback.nota)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
