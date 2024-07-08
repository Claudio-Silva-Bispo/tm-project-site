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
    const [loadingError, setLoadingError] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3000/api/buscarFeedbacks')
            .then(response => response.json())
            .then((data: Feedback[]) => {
                const filteredFeedbacks = data.filter(feedback => feedback.mostrar_tela);
                const sortedFeedbacks = filteredFeedbacks.sort((a, b) => a.mostrar_tela.localeCompare(b.mostrar_tela));
                setFeedbacks(sortedFeedbacks);
                setLoadingError(false);
            })
            .catch(error => {
                console.error('Erro ao buscar feedbacks:', error);
                setLoadingError(true);
            });
    }, []);

    const renderStars = (nota: number) => (
        Array.from({ length: nota }, (_, index) => (
            <span key={index} className="text-[#064E8B] text-4xl">&#9733;</span> // Star icon
        ))
    );

    // Array with unique placeholder data
    const placeholders = [
        {_id: 'placeholder-1', nome: 'Wilson', mensagem: 'I love how thorough the cleaners are. They pay attention to the detail and they care about their customers so I care about them!', nota: 5, mostrar_tela: '1'},
        {_id: 'placeholder-2', nome: 'Ana', mensagem: 'TM good professionals, punctual and attentive', nota: 5, mostrar_tela: '2'},
        {_id: 'placeholder-3', nome: 'Laura', mensagem: 'They serve me as I asked, they are quick and practical. :)', nota: 5, mostrar_tela: '3'},
        {_id: 'placeholder-4', nome: 'John billie', mensagem: 'The best cleaning im really recommend!', nota: 5, mostrar_tela: '4'},
        {_id: 'placeholder-5', nome: 'Deniel murphy', mensagem: 'Our house is like new , im really appreciated, very happy whit result.', nota: 5, mostrar_tela: '5'},
        {_id: 'placeholder-6', nome: 'Mellhi basunh', mensagem: 'Very good job🙏🏼 Thank you TM for leaving my house smelling clean!', nota: 5, mostrar_tela: '6'}
    ];

    return (
        <section className="bg-[#F3AACB] pb-10 md:pb-0 pt-20" id="testimonials">
            
            <div className="container flex flex-col justify-start md:justify-center items-center mx-auto mb-10 md:p-8 md:px-10 pt-10">
                <h1 className="p-4 text-5xl font-semibold leading-none text-start md:text-center text-white uppercase mt-10 md:mt-0">What our customers are saying about us</h1>
            </div>

            <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10 bg-white">
                {(loadingError || feedbacks.length === 0 ? placeholders : feedbacks).map((feedback, index) => (
                    <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg" key={feedback._id}>
                        <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50 h-56">
                            <p className="relative px-6 py-1 text-md italic text-center dark:text-gray-800">
                                {feedback.mensagem}
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-[#F3AACB] text-gray-50">
                            <p className="text-xl font-semibold leading-tight">{feedback.nome}</p>
                            <div className="flex mt-5">
                                {renderStars(feedback.nota)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
