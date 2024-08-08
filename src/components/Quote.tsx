"use client"

import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import React, { useState, useRef } from 'react';

type FormDataChangeHandler = (name: string, value: string) => void;

export default function FormQuote() {
    const formRef = useRef<HTMLFormElement>(null);

    // Estado para controlar a etapa atual do formulário
    const [currentStep, setCurrentStep] = useState(1);

    const [formData, setFormData] = useState({
        firstName: '',
        phone: '',
        email: '',
        streetAddress: '',
        city: '',
        region: '',
        postalCode: '',
        room: '',
        pet: '',
        frequency: '',
        date: '',
        hour: '',
        message: ''
    });

    const handleFormDataChange: FormDataChangeHandler = (name, value) => {
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    // Função para avançar para a próxima etapa
    const nextStep = () => {
        if (validateCurrentStep()) {
            setCurrentStep(currentStep + 1);
        }
    };

    // Função para voltar à etapa anterior
    const prevStep = () => {
        setCurrentStep(currentStep - 1);
    };

    // Função para validar a etapa atual
    const validateCurrentStep = () => {
        switch (currentStep) {
            case 1:
                return formData.firstName && formData.phone && formData.email;
            case 2:
                return formData.streetAddress && formData.city && formData.region && formData.postalCode;
            case 3:
                return formData.room && formData.pet && formData.frequency;
            case 4:
                return formData.date && formData.hour && formData.message;
            default:
                return false;
        }
    };

    // Renderiza a etapa atual do formulário
    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return <PersonalInfo onChange={handleFormDataChange} values={formData} />;
            case 2:
                return <ResidenceInfo onChange={handleFormDataChange} values={formData} />;
            case 3:
                return <AdditionalInfo onChange={handleFormDataChange} values={formData} />;
            case 4:
                return <Schedule onChange={handleFormDataChange} values={formData} />;
            default:
                return <PersonalInfo onChange={handleFormDataChange} values={formData} />;
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (currentStep < 4) {
            nextStep();
        } else {
            // Validação de campos obrigatórios
            if (!validateCurrentStep()) {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }

            console.log('Enviando o formulário com os dados:', formData);

            try {
                const response = await fetch('https://tmservicescleaning.com/api/criarOrcamento', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        ...formData,
                        room: formData.room.toString(),  // Garantir que valores numéricos são convertidos para strings, se necessário
                        pet: formData.pet,
                        frequency: formData.frequency
                    }),
                });

                if (response.ok) {
                    const result = await response.json();
                    console.log('Resposta do servidor:', result);
                    alert('Orçamento enviado com sucesso!');
                    setFormData({
                        firstName: '',
                        phone: '',
                        email: '',
                        streetAddress: '',
                        city: '',
                        region: '',
                        postalCode: '',
                        room: '',
                        pet: '',
                        frequency: '',
                        date: '',
                        hour: '',
                        message: ''
                    });
                } else {
                    throw new Error('Falha ao enviar orçamento.');
                }
            } catch (error) {
                console.error('Erro ao enviar dados:', error, formData);
                alert('Erro ao enviar orçamento. Por favor, tente novamente mais tarde.');
            }
        }
    };

    return (
        <form 
            ref={formRef}
            name='form-quote' 
            id='form-quote'
            method='post' 
            data-netlify="true" 
            onSubmit={handleSubmit} 
            className='bg-[#F3AACB] grid md:flex px-10 justify-center items-center min-h-[840px]'
        >
            <input type="hidden" name="form-name" value="form-quote" />
            <input type="hidden" name="firstName" value={formData.firstName} />
            <input type="hidden" name="phone" value={formData.phone} />
            <input type="hidden" name="email" value={formData.email} />
            <input type="hidden" name="streetAddress" value={formData.streetAddress} />
            <input type="hidden" name="city" value={formData.city} />
            <input type="hidden" name="region" value={formData.region} />
            <input type="hidden" name="postalCode" value={formData.postalCode} />
            <input type="hidden" name="room" value={formData.room} />
            <input type="hidden" name="pet" value={formData.pet} />
            <input type="hidden" name="frequency" value={formData.frequency} />
            <input type="hidden" name="date" value={formData.date} />
            <input type="hidden" name="hour" value={formData.hour} />
            <input type="hidden" name="message" value={formData.message} />

            <div className="bg-white rounded-xl h-[600px] md:h-[550px] w-[100%] md:w-[50%] p-10 order-2 md:order-1 mb-20 md:mb-0">
                {renderStep()}
                <div className="flex justify-between">
                    {currentStep > 1 && (
                        <button type="button" onClick={prevStep} className="mt-4 bg-gray-200 hover:bg-gray-300 text-black py-2 px-4 rounded">
                            Previous
                        </button>
                    )}
                    {currentStep < 4 && (
                        <button type="button" onClick={nextStep} className="mt-4 bg-[#064E8B] hover:bg-[#B3CEE5] text-white py-2 px-4 rounded">
                            Next
                        </button>
                    )}
                    {currentStep === 4 && (
                        <button className="mt-4 bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded" type='submit'>
                            Send
                        </button>
                    )}
                </div>
            </div>

            <div className="grid md:flex md:flex-col md:justify-center mt-0 md:p-10 w-[100%] order-1">
                <h1 className='text-6xl md:text-5xl font-bold tracking-tight text-[#FFFF] uppercase mt-20 md:mt-0'>Request your quote</h1>
                <p className='mt-10 mb-10 text-lg md:text-2xl text-gray-600 w-[100%]'>
                    To schedule a cleaning service or request a quote, fill out the form on the side. Share with us the details of the desired service, whether its for residential, commercial cleaning, or for a special event. We are ready to meet your needs and ensure the cleanliness and comfort you deserve.
                </p>
            </div>
        </form>
    );
}

interface PersonalInfoProps {
    onChange: FormDataChangeHandler;
    values: any;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ onChange, values }) => {
    return (
        <div className="mb-5">
            <h2 className="text- font-semibold leading-7 uppercase text-blue-900">Personal information</h2>
            <div className="mt-5 flex gap-x-1 gap-y-6 flex-col">
                <div className="sm:col-span-3">
                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                        Full name
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            autoComplete="firstName"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={values.firstName}
                            onChange={(e) => onChange(e.target.name, e.target.value)}
                        />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                        Phone number
                    </label>
                    <div className="mt-2">
                        <input
                            type="number"
                            name="phone"
                            id="phone"
                            autoComplete="phone"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={values.phone}
                            onChange={(e) => onChange(e.target.name, e.target.value)}
                        />
                    </div>
                </div>

                <div className="sm:col-span-4">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email address
                    </label>
                    <div className="mt-2">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={values.email}
                            onChange={(e) => onChange(e.target.name, e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

interface ResidenceInfoProps {
    onChange: FormDataChangeHandler;
    values: any;
}

const ResidenceInfo: React.FC<ResidenceInfoProps> = ({ onChange, values }) => {
    return (
        <div className="w-full">
            <h2 className="text-lg font-semibold leading-7 text-blue-900 mt-10 uppercase">Home information</h2>
            <div className="mt-5 flex-col md:block md:grid-cols-1 md:gap-x-6 md:gap-y-5 ">
                <div className="col-span-full">
                    <label htmlFor="street-address" className="block text-sm font-medium leading-2 text-gray-900">
                        Street address
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="streetAddress"
                            id="streetAddress"
                            autoComplete="streetAddress"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={values.streetAddress}
                            onChange={(e) => onChange(e.target.name, e.target.value)}
                        />
                    </div>
                </div>

                <div className="sm:col-span-2 sm:col-start-1">
                    <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                        City
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="city"
                            id="city"
                            autoComplete="city"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={values.city}
                            onChange={(e) => onChange(e.target.name, e.target.value)}
                        />
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                        State / Province
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="region"
                            id="region"
                            autoComplete="region"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={values.region}
                            onChange={(e) => onChange(e.target.name, e.target.value)}
                        />
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                        ZIP / Postal code
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="postalCode"
                            id="postalCode"
                            autoComplete="postalCode"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={values.postalCode}
                            onChange={(e) => onChange(e.target.name, e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

interface AdditionalInfoProps {
    onChange: FormDataChangeHandler;
    values: any;
}

const AdditionalInfo: React.FC<AdditionalInfoProps> = ({ onChange, values }) => {
    return (
        <div className="w-full">
            <h2 className="text-lg font-semibold leading-7 uppercase text-blue-900 mt-10">Additional information</h2>
            <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-5 sm:flex-col">
                <div className='sm:col-span-3'>
                    <label htmlFor="rooms" className="block text-sm font-medium leading-6 text-gray-900">
                        How many rooms?
                    </label>
                    <div className="mt-2">
                        <select
                            id="room"
                            name="room"
                            autoComplete="room"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            value={values.room}
                            onChange={(e) => onChange(e.target.name, e.target.value)}
                        >
                            <option value="">Select an option</option>
                            <option>1</option>
                            <option>2</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>Mais</option>
                        </select>
                    </div>
                </div>

                <div className='sm:col-span-3'>
                    <label htmlFor="pets" className="block text-sm font-medium leading-6 text-gray-900">
                        Do you have pets?
                    </label>
                    <div className="mt-2">
                        <select
                            id="pet"
                            name="pet"
                            autoComplete="pet"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            value={values.pet}
                            onChange={(e) => onChange(e.target.name, e.target.value)}
                        >
                            <option value="">Select an option</option>
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                    </div>
                </div>

                <div className='sm:col-span-3'>
                    <label htmlFor="frequency" className="block text-sm font-medium leading-6 text-gray-900">
                        What is the frequency?
                    </label>
                    <div className="mt-2">
                        <select
                            id="frequency"
                            name="frequency"
                            autoComplete="frequency"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            value={values.frequency}
                            onChange={(e) => onChange(e.target.name, e.target.value)}
                        >
                            <option value="">Select an option</option>
                            <option>Once</option>
                            <option>Daily</option>
                            <option>Weekly</option>
                            <option>Biweekly</option>
                            <option>Monthly</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

interface ScheduleProps {
    onChange: FormDataChangeHandler;
    values: any;
}

const Schedule: React.FC<ScheduleProps> = ({ onChange, values }) => {
    return (
        <div className="w-full">
            <h2 className="text-lg font-semibold leading-7 uppercase text-blue-900 mt-10">Appointment</h2>
            <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-6">
                <div className='sm:col-span-3'>
                    <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">
                        Date
                    </label>
                    <div className="mt-2">
                        <input
                            type="date"
                            id="date"
                            name="date"
                            autoComplete="date"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            value={values.date}
                            onChange={(e) => onChange(e.target.name, e.target.value)}
                        />
                    </div>
                </div>

                <div className='sm:col-span-3'>
                    <label htmlFor="hour" className="block text-sm font-medium leading-6 text-gray-900">
                        Hour
                    </label>
                    <div className="mt-2">
                        <input
                            type="time"
                            id="hour"
                            name="hour"
                            autoComplete="hour"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            value={values.hour}
                            onChange={(e) => onChange(e.target.name, e.target.value)}
                        />
                    </div>
                </div>

                <div className="sm:col-span-6">
                    <label className="flex mb-2 text-sm font-medium text-gray-900 dark:text-white">Aditional information</label>
                    <textarea
                        id="message"
                        name='message'
                        rows={5}
                        className="block p-2 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Leave a comment..."
                        value={values.message}
                        onChange={(e) => onChange(e.target.name, e.target.value)}
                    ></textarea>
                </div>
            </div>
        </div>
    );
};
