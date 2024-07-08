import React, { useState } from 'react';
import EditarFeedbackModal from './EditarFeedbackModal';
import ConfirmarExclusaoModal from './ConfirmarExclusaoModal';

interface FeedbackData {
  _id: string;
  nome: string;
  email: string;
  mensagem: string;
  nota: string;
  mostrar_tela: string;
}

interface TabelaFeedbacksProps {
  data: FeedbackData[];
  onRefresh: () => void;
}

const TabelaFeedbacks: React.FC<TabelaFeedbacksProps> = ({ data, onRefresh }) => {
  const [feedbackEditando, setFeedbackEditando] = useState<FeedbackData | null>(null);
  const [feedbackExcluindo, setFeedbackExcluindo] = useState<FeedbackData | null>(null);

  const handleEditClick = (feedback: FeedbackData) => {
    setFeedbackEditando(feedback);
  };

  const handleDeleteClick = (feedback: FeedbackData) => {
    setFeedbackExcluindo(feedback);
  };

  const handleSave = async (updatedFeedback: FeedbackData) => {
    const payload = {
      id: updatedFeedback._id,
      nome: updatedFeedback.nome,
      email: updatedFeedback.email,
      mensagem: updatedFeedback.mensagem,
      nota: updatedFeedback.nota,
      mostrar_tela: updatedFeedback.mostrar_tela,
    };

    try {
      const response = await fetch('http://localhost:3000/api/atualizarFeedback', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.error || 'Erro desconhecido ao atualizar feedback');
      }
      setFeedbackEditando(null);
      onRefresh();
    } catch (error) {
      console.error('Erro ao salvar feedback:', error);
    }
  };

  const handleConfirmDelete = async () => {
    if (feedbackExcluindo) {
      try {
        const response = await fetch('https://tmservicescleaning.com/api/excluirFeedback', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: feedbackExcluindo._id }),
        });
        if (!response.ok) {
          throw new Error('Erro ao excluir feedback');
        }
        setFeedbackExcluindo(null);
        onRefresh();
      } catch (error) {
        console.error('Erro ao excluir feedback:', error);
      }
    }
  };

  return (
    <>
      <table className="w-full p-6 text-xs text-left whitespace-nowrap">
        <thead>
          <tr className="dark:bg-gray-300">
            <th className="p-3">Nome</th>
            <th className="p-3">E-mail</th>
            <th className="p-3">Mensagem</th>
            <th className="p-3">Nota</th>
            <th className="p-3">Mostrar no site</th>
            <th className="p-3">Ações</th>
          </tr>
        </thead>

        <tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
          {data.map((item) => (
            <tr key={item._id}>
              <td className="px-3 py-2">{item.nome}</td>
              <td className="px-3 py-2">{item.email}</td>
              <td className="px-3 py-2">{item.mensagem}</td>
              <td className="px-3 py-2">{item.nota}</td>
              <td className="px-3 py-2">{item.mostrar_tela}</td>
              <td className="px-3 py-2">
                <button onClick={() => handleEditClick(item)} className="px-2 py-1 text-white bg-blue-600 rounded">Editar</button>
                <button onClick={() => handleDeleteClick(item)} className="ml-2 px-2 py-1 text-white bg-red-600 rounded">Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {feedbackEditando && (
        <EditarFeedbackModal
        feedback={feedbackEditando}
          onClose={() => setFeedbackEditando(null)}
          onSave={handleSave}
        />
      )}
      {feedbackExcluindo && (
        <ConfirmarExclusaoModal
          onConfirm={handleConfirmDelete}
          onCancel={() => setFeedbackExcluindo(null)}
        />
      )}
    </>
  );
};

export default TabelaFeedbacks;
