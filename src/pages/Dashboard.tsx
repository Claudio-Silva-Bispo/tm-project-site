import React, { useState, useEffect, useCallback } from 'react';
import Sidebar, { Section } from '../components/MenuAreaLogada';
import TabelaUsuarios from '../components/TabelaUsuarios';
import TabelaContatos from '../components/TabelaContatos';
import TabelaFeedbacks from '../components/TabelaFeedbacks';
import TabelaAgendamentos from '../components/TabelaAgendamentos';

const Dashboard: React.FC = () => {
  const [section, setSection] = useState<Section>('usuarios');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:3000/api/buscar${section.charAt(0).toUpperCase() + section.slice(1)}`);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
    setLoading(false);
  }, [section]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="flex h-screen">
      <Sidebar setSection={setSection} />
      <main className="flex-1 p-6 ml-60 dark:bg-gray-100 dark:text-gray-800">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">{section.charAt(0).toUpperCase() + section.slice(1)}</h2>
          <button onClick={fetchData} className="px-4 py-2 text-white bg-[#E5332F] rounded">Atualizar Base</button>
        </div>
        <div className="overflow-x-auto">
          {loading ? (
            <p>Carregando...</p>
          ) : (
            <>
              {section === 'usuarios' && <TabelaUsuarios data={data} onRefresh={fetchData} />}
              {section === 'contatos' && <TabelaContatos data={data} onRefresh={fetchData}/>}
              {section === 'feedbacks' && <TabelaFeedbacks data={data} onRefresh={fetchData}/>}
              {section === 'agendamentos' && <TabelaAgendamentos data={data} />}
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
