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
        fetch('https://olivercleaningservice.com/api/buscarFeedbacks')
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
            <span key={index} className="text-yellow-500">&#9733;</span> // Star icon
        ))
    );

    // Array with unique placeholder data
    const placeholders = [
        {_id: 'placeholder-1', nome: 'Cliff Wylie', mensagem: 'Oziel has been cleaning our house for over a decade. He is excellent. His attention to detail and level of cleanliness are unparalleled. Our house always looks perfect when he finishes. Additionally, he is very consistent and reliable. If there are any timing issues, it is good that he communicates in advance. I highly recommend Oliver Business.', nota: 5, mostrar_tela: '1'},
        {_id: 'placeholder-2', nome: 'Jeanne Walford', mensagem: 'Oziel has been cleaning our house for almost 10 years. He is punctual, honest, hardworking, and does an amazing job. We are a bit messy with a long-haired dog, a bird, and a 10-year-old boy!! It is a great help and stress relief to know that our house looks amazing every time he cleans. Thank you and highly recommended', nota: 5, mostrar_tela: '2'},
        {_id: 'placeholder-3', nome: 'Eileen Asmundson', mensagem: 'have used them for probably about 10 years and the service is fantastic! Very thorough and so dependable, really top notch. I use them for my personal residence and in my real estate business. I cannot recommend highly enough! You will not be disappointed.', nota: 4, mostrar_tela: '3'},
        {_id: 'placeholder-4', nome: 'Susanne Aagerup', mensagem: 'Oliver Business Cleaning Services had been cleaning my home for many, many years. They are thorough, prompt and professional. I HIGHLY recommend and you won’t be disappointed in their services', nota: 5, mostrar_tela: '4'},
        {_id: 'placeholder-5', nome: 'Elizabeth Kennedy', mensagem: 'Oliver Business Cleaning Services is AMAZING! Ive never had my house cleaned better or more beautifully. I really cant say enough about his service. He is fabulous!', nota: 5, mostrar_tela: '5'},
        {_id: 'placeholder-6', nome: 'Lauren Moynihan', mensagem: 'I’ve had Oziel since 2006 and he does a wonderful job! Highly recommend his cleaning service.', nota: 5, mostrar_tela: '6'}
    ];

    return (
        <section className="bg-primeira pb-10 md:pb-0 pt-20" id="Testimonials">
            <div className="container flex flex-col justify-start md:justify-center items-center mx-auto mb-10 md:p-8 md:px-10 pt-10">
                <h1 className="p-4 text-5xl font-semibold leading-none text-start md:text-center text-white uppercase mt-10 md:mt-0">What our customers are saying about us</h1>
            </div>

            <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10 bg-white">
                {(loadingError || feedbacks.length === 0 ? placeholders : feedbacks).map((feedback, index) => (
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
