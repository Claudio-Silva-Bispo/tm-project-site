import React from 'react';

interface ConfirmarExclusaoModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmarExclusaoModal: React.FC<ConfirmarExclusaoModalProps> = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded">
        <h2 className="text-xl font-semibold mb-4">Confirmar Exclusão</h2>
        <p className="mb-4">Tem certeza de que deseja excluir este usuário?</p>
        <p>Depois de clicar em "Excluir", clique em "Atualizar Base" para confirmar a ação!</p>
        <div className="flex justify-end space-x-4 mt-3">
          <button onClick={onCancel} className="px-4 py-2 bg-gray-300 rounded">Cancelar</button>
          <button onClick={onConfirm} className="px-4 py-2 bg-red-600 text-white rounded">Excluir</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmarExclusaoModal;
