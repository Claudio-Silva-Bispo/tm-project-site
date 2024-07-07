

import React, { useState, useEffect } from 'react';

interface OrcamentoData {
  _id: string;  // Ajuste aqui para usar _id
  firstName: string;
  phone: string;
  email: string;
  streetAddress: string;
  city: string;
  region: string;
  postalCode: string;
  room: string;
  pet: string;
  frequency: string;
  date: string;
  hour: string;
  message: string;
}

interface EditarOrcamentoModalProps {
  orcamento: OrcamentoData | null;
  onClose: () => void;
  onSave: (data: OrcamentoData) => void;
}

const EditarOrcamentoModal: React.FC<EditarOrcamentoModalProps> = ({ orcamento, onClose, onSave }) => {
  const [formData, setFormData] = useState<OrcamentoData>({
    _id: '',  // Ajuste aqui para usar _id
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
    message: '',
  });

  useEffect(() => {
    if (orcamento) {
      setFormData(orcamento); 
    }
  }, [orcamento]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSave(formData);  // Enviando formData que inclui _id
  };

  if (!orcamento) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      
      <div className="bg-white p-6 rounded">
        
        <h2 className="text-xl font-semibold mb-4">Editar Orçamento</h2>
        
        <form onSubmit={handleSubmit} className=" grid grid-cols-4 gap-5 justify-center items-center">
          
          <div>
            
            <label htmlFor="firstName" className="block text-sm font-medium">Nome</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="w-full p-2 border border-gray-300 rounded"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium">Telefone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="w-full p-2 border border-gray-300 rounded"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="streetAddress" className="block text-sm font-medium">Endereço</label>
            <input
              type="text"
              id="streetAddress"
              name="streetAddress"
              className="w-full p-2 border border-gray-300 rounded"
              value={formData.streetAddress}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="city" className="block text-sm font-medium">Cidade</label>
            <input
              type="text"
              id="city"
              name="city"
              className="w-full p-2 border border-gray-300 rounded"
              value={formData.city}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="region" className="block text-sm font-medium">Estado</label>
            <input
              type="text"
              id="region"
              name="region"
              className="w-full p-2 border border-gray-300 rounded"
              value={formData.region}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="postalCode" className="block text-sm font-medium">CEP</label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              className="w-full p-2 border border-gray-300 rounded"
              value={formData.postalCode}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="room" className="block text-sm font-medium">Qde. Quartos</label>
            <input
              type="text"
              id="room"
              name="room"
              className="w-full p-2 border border-gray-300 rounded"
              value={formData.room}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="pet" className="block text-sm font-medium">Animais</label>
            <input
              type="text"
              id="pet"
              name="pet"
              className="w-full p-2 border border-gray-300 rounded"
              value={formData.pet}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="frequency" className="block text-sm font-medium">Frequência</label>
            <input
              type="text"
              id="frequency"
              name="frequency"
              className="w-full p-2 border border-gray-300 rounded"
              value={formData.frequency}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-medium">Data</label>
            <input
              type="text"
              id="date"
              name="date"
              className="w-full p-2 border border-gray-300 rounded"
              value={formData.date}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="hour" className="block text-sm font-medium">Hora</label>
            <input
              type="text"
              id="hour"
              name="hour"
              className="w-full p-2 border border-gray-300 rounded"
              value={formData.hour}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium">Mensagem</label>
            <input
              type="text"
              id="message"
              name="message"
              className="w-full p-2 border border-gray-300 rounded"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">Cancelar</button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Salvar</button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default EditarOrcamentoModal;
