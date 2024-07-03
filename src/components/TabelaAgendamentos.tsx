import React from 'react';

interface UserData {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  servico: string;
  localizacao: string;
  mensagem: string;
}

interface TabelaUsuariosProps {
  data: UserData[];
}

const TabelaUsuarios: React.FC<TabelaUsuariosProps> = ({ data }) => {
  return (
    <table className="w-full p-6 text-xs text-left whitespace-nowrap">
      <thead>
        <tr className="dark:bg-gray-300">
          <th className="p-3">Nome</th>
          <th className="p-3">E-mail</th>
          <th className="p-3">Telefone</th>
          <th className="p-3">Serviço</th>
          <th className="p-3">Localizacão</th>
          <th className="p-3">Mensagem</th>
          <th className="p-3">Ações</th>
        </tr>
      </thead>
      <tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
        {data.map((item) => (
          <tr key={item.id}>
            <td className="px-3 py-2">{item.nome}</td>
            <td className="px-3 py-2">{item.email}</td>
            <td className="px-3 py-2">{item.telefone}</td>
            <td className="px-3 py-2">{item.servico}</td>
            <td className="px-3 py-2">{item.localizacao}</td>
            <td className="px-3 py-2">{item.mensagem}</td>
            <td className="px-3 py-2">
              <button className="px-2 py-1 text-white bg-blue-600 rounded">Editar</button>
              <button className="ml-2 px-2 py-1 text-white bg-red-600 rounded">Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TabelaUsuarios;
