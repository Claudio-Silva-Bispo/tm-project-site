import React, { useState } from 'react';
import EditarUsuarioModal from './EditarUsuarioModal';
import ConfirmarExclusaoModal from './ConfirmarExclusaoModal';

interface UserData {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  senha?: string;
}

interface TabelaUsuariosProps {
  data: UserData[];
  onRefresh: () => void;
}

const TabelaUsuarios: React.FC<TabelaUsuariosProps> = ({ data, onRefresh }) => {
  const [usuarioEditando, setUsuarioEditando] = useState<UserData | null>(null);
  const [usuarioExcluindo, setUsuarioExcluindo] = useState<UserData | null>(null);

  const handleEditClick = (usuario: UserData) => {
    setUsuarioEditando(usuario);
  };

  const handleDeleteClick = (usuario: UserData) => {
    setUsuarioExcluindo(usuario);
  };

  const handleSave = async (updatedUsuario: UserData) => {
    try {
      const response = await fetch('https://oficina-project.vercel.app/api/atualizarUsuario', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUsuario),
      });
      if (!response.ok) {
        throw new Error('Erro ao atualizar usuário');
      }
      setUsuarioEditando(null);
      onRefresh(); // Atualizar a lista de usuários
    } catch (error) {
      console.error('Erro ao salvar usuário:', error);
    }
  };

  const handleConfirmDelete = async () => {
    if (usuarioExcluindo) {
      try {
        const response = await fetch('https://oficina-project.vercel.app/api/excluirUsuario', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: usuarioExcluindo.id }),
        });
        if (!response.ok) {
          throw new Error('Erro ao excluir usuário');
        }
        setUsuarioExcluindo(null);
        onRefresh(); // Atualizar a lista de usuários
      } catch (error) {
        console.error('Erro ao excluir usuário:', error);
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
            <th className="p-3">Ações</th>
          </tr>
        </thead>
        <tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
          {data.map((item) => (
            <tr key={item.id}>
              <td className="px-3 py-2">{item.nome}</td>
              <td className="px-3 py-2">{item.email}</td>
              <td className="px-3 py-2">{item.telefone}</td>
              <td className="px-3 py-2">
                <button onClick={() => handleEditClick(item)} className="px-2 py-1 text-white bg-blue-600 rounded">Editar</button>
                <button onClick={() => handleDeleteClick(item)} className="ml-2 px-2 py-1 text-white bg-red-600 rounded">Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {usuarioEditando && (
        <EditarUsuarioModal
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

export default TabelaUsuarios;
