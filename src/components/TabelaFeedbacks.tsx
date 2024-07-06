import React, { useState } from 'react';
import EditarFeedbackModal from './EditarFeedbackModal';
import ConfirmarExclusaoModal from './ConfirmarExclusaoModal';

interface UserData {
  _id: string;
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
  nota: string;
  mostrar_tela: string;
}

interface TabelaFeedbacksProps {
  data: UserData[];
  onRefresh: () => void;
}

const TabelaFeedbacks: React.FC<TabelaFeedbacksProps> = ({ data, onRefresh }) => {
  const [usuarioEditando, setUsuarioEditando] = useState<UserData | null>(null);
  const [usuarioExcluindo, setUsuarioExcluindo] = useState<UserData | null>(null);

  const handleEditClick = (usuario: UserData) => {
    setUsuarioEditando(usuario);
  };

  const handleDeleteClick = (usuario: UserData) => {
    setUsuarioExcluindo(usuario);
  };

  const handleSave = async (updatedUsuario: UserData) => {
    const payload = {
      id: updatedUsuario._id,
      nome: updatedUsuario.nome,
      email: updatedUsuario.email,
      telefone: updatedUsuario.telefone,
      mensagem: updatedUsuario.mensagem,
      nota: updatedUsuario.nota,
      mostrar_tela: updatedUsuario.mostrar_tela,
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
        throw new Error(errorResponse.error || 'Erro desconhecido ao atualizar contato');
      }
      setUsuarioEditando(null);
      onRefresh();
    } catch (error) {
      console.error('Erro ao salvar contato:', error);
    }
  };

  const handleConfirmDelete = async () => {
    if (usuarioExcluindo) {
      try {
        const response = await fetch('http://localhost:3000/api/excluirFeedback', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: usuarioExcluindo._id }),
        });
        if (!response.ok) {
          throw new Error('Erro ao excluir contato');
        }
        setUsuarioExcluindo(null);
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
              <td className="px-3 py-2">{item.telefone}</td>
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

      {usuarioEditando && (
        <EditarFeedbackModal
          usuario={usuarioEditando}
          onClose={() => setUsuarioEditando(null)}
          onSave={handleSave}
        />
      )}
      {usuarioExcluindo && (
        <ConfirmarExclusaoModal
          onConfirm={handleConfirmDelete}
          onCancel={() => setUsuarioExcluindo(null)}
        />
      )}
    </>
  );
};

export default TabelaFeedbacks;
