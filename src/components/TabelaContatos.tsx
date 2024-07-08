import React, { useState } from 'react';
import EditarContatoModal from './EditarContatoModal';
import ConfirmarExclusaoModal from './ConfirmarExclusaoModal';

interface ContatoData {
  _id: string;
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
}

interface TabelaContatosProps {
  data: ContatoData[];
  onRefresh: () => void;
}

const TabelaContatos: React.FC<TabelaContatosProps> = ({ data, onRefresh }) => {
  const [contatoEditando, setContatoEditando] = useState<ContatoData | null>(null);
  const [contatoExcluindo, setContatoExcluindo] = useState<ContatoData | null>(null);

  const handleEditClick = (contato: ContatoData) => {
    setContatoEditando(contato);
  };

  const handleDeleteClick = (contato: ContatoData) => {
    setContatoExcluindo(contato);
  };

  const handleSave = async (updatedContato: ContatoData) => {
    const payload = {
      id: updatedContato._id,
      nome: updatedContato.nome,
      email: updatedContato.email,
      telefone: updatedContato.telefone,
      mensagem: updatedContato.mensagem
    };

    try {
      const response = await fetch('http://localhost:3000/api/atualizarContato', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.error || 'Erro desconhecido ao atualizar contato');
      }
      setContatoEditando(null);
      onRefresh();
    } catch (error) {
      console.error('Erro ao salvar contato:', error);
    }
  };

  const handleConfirmDelete = async () => {
    if (contatoExcluindo) {
      try {
        const response = await fetch('https://olivercleaningservice.com/api/excluirContato', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: contatoExcluindo._id }),
        });
        if (!response.ok) {
          throw new Error('Erro ao excluir contato');
        }
        setContatoExcluindo(null);
        onRefresh();
      } catch (error) {
        console.error('Erro ao excluir contato:', error);
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
            <th className="p-3">Telefone</th>
            <th className="p-3">Mensagem</th>
            <th className="p-3">Ações</th>
          </tr>
        </thead>
        <tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
          {data.map((item) => (
            <tr key={item._id}>
              <td className="px-3 py-2">{item.nome}</td>
              <td className="px-3 py-2">{item.email}</td>
              <td className="px-3 py-2">{item.telefone}</td>
              <td className="px-3 py-2">{item.mensagem}</td>
              <td className="px-3 py-2">
                <button onClick={() => handleEditClick(item)} className="px-2 py-1 text-white bg-blue-600 rounded">Editar</button>
                <button onClick={() => handleDeleteClick(item)} className="ml-2 px-2 py-1 text-white bg-red-600 rounded">Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {contatoEditando && (
        <EditarContatoModal
          contato={contatoEditando}
          onClose={() => setContatoEditando(null)}
          onSave={handleSave}
        />
      )}
      {contatoExcluindo && (
        <ConfirmarExclusaoModal
          onConfirm={handleConfirmDelete}
          onCancel={() => setContatoExcluindo(null)}
        />
      )}
    </>
  );
};

export default TabelaContatos;
