import React, { useState } from 'react';
import EditarOrcamentoModal from './EditarOrcamentoModal';
import ConfirmarExclusaoModal from './ConfirmarExclusaoModal';

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

interface TabelaOrcamentosProps {
  data: OrcamentoData[];
  onRefresh: () => void;
}

const TabelaContatos: React.FC<TabelaOrcamentosProps> = ({ data, onRefresh }) => {
  const [orcamentoEditando, setOrcamentoEditando] = useState<OrcamentoData | null>(null);
  const [orcamentoExcluindo, setOrcamentoExcluindo] = useState<OrcamentoData | null>(null);

  const handleEditClick = (orcamento: OrcamentoData) => {
    setOrcamentoEditando(orcamento);
  };

  const handleDeleteClick = (orcamento: OrcamentoData) => {
    setOrcamentoExcluindo(orcamento);
  };

  const handleSave = async (updatedOrcamento: OrcamentoData) => {
    const payload = {
      id: updatedOrcamento._id,
      firstName: updatedOrcamento.firstName,
      phone: updatedOrcamento.phone,
      email: updatedOrcamento.email,
      streetAddress: updatedOrcamento.streetAddress,
      region: updatedOrcamento.region,
      postalCode: updatedOrcamento.postalCode,
      room: updatedOrcamento.room,
      pet: updatedOrcamento.pet,
      frequency: updatedOrcamento.frequency,
      date: updatedOrcamento.date,
      hour: updatedOrcamento.hour,
      message: updatedOrcamento.message

    };

    try {
      const response = await fetch('https://olivercleaningservice.com/api/atualizarOrcamento', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.error || 'Erro desconhecido ao atualizar orçamento');
      }
      setOrcamentoEditando(null);
      onRefresh();
    } catch (error) {
      console.error('Erro ao salvar orçamento:', error);
    }
  };

  const handleConfirmDelete = async () => {
    if (orcamentoExcluindo) {
      try {
        const response = await fetch('https://olivercleaningservice.com/api/excluirOrcamento', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: orcamentoExcluindo._id }),
        });
        if (!response.ok) {
          throw new Error('Erro ao excluir orçamento');
        }
        setOrcamentoExcluindo(null);
        onRefresh();
      } catch (error) {
        console.error('Erro ao excluir orçamento:', error);
      }
    }
  };

  return (
    <>
      <table className="w-full p-6 text-xs text-left whitespace-nowrap">
        <thead>
          <tr className="dark:bg-gray-300">
            <th className="p-3">Nome</th>
            <th className="p-3">Telefone</th>
            <th className="p-3">E-mail</th>
            <th className="p-3">Rua</th>
            <th className="p-3">Cidade</th>
            <th className="p-3">Estado</th>
            <th className="p-3">CEP</th>
            <th className="p-3">Qde. Quartos</th>
            <th className="p-3">Animais</th>
            <th className="p-3">Frequência</th>
            <th className="p-3">Data</th>
            <th className="p-3">Hora</th>
            <th className="p-3">Mensagem</th>
            <th className="p-3">Ações</th>

          </tr>
        </thead>
        <tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
          {data.map((item) => (
            <tr key={item._id}>
              <td className="px-3 py-2">{item.firstName}</td>
              <td className="px-3 py-2">{item.phone}</td>
              <td className="px-3 py-2">{item.email}</td>
              <td className="px-3 py-2">{item.streetAddress}</td>
              <td className="px-3 py-2">{item.city}</td>
              <td className="px-3 py-2">{item.region}</td>
              <td className="px-3 py-2">{item.postalCode}</td>
              <td className="px-3 py-2">{item.room}</td>
              <td className="px-3 py-2">{item.pet}</td>
              <td className="px-3 py-2">{item.frequency}</td>
              <td className="px-3 py-2">{item.date}</td>
              <td className="px-3 py-2">{item.hour}</td>
              <td className="px-3 py-2">{item.message}</td>

              <td className="px-3 py-2">
                <button onClick={() => handleEditClick(item)} className="px-2 py-1 text-white bg-blue-600 rounded">Editar</button>
                <button onClick={() => handleDeleteClick(item)} className="ml-2 px-2 py-1 text-white bg-red-600 rounded">Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {orcamentoEditando && (
        <EditarOrcamentoModal
          orcamento={orcamentoEditando}
          onClose={() => setOrcamentoEditando(null)}
          onSave={handleSave}
        />
      )}
      {orcamentoExcluindo && (
        <ConfirmarExclusaoModal
          onConfirm={handleConfirmDelete}
          onCancel={() => setOrcamentoExcluindo(null)}
        />
      )}
    </>
  );
};

export default TabelaContatos;
