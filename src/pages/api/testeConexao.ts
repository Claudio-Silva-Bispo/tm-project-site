// pages/api/testeConexao.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../lib/mongodb'; // Ajuste o caminho conforme necessário

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { client, db } = await connectToDatabase();
        res.status(200).json({ message: 'Conexão com o MongoDB estabelecida com sucesso!' });
        await client.close(); // Fechar a conexão após o teste
    } catch (error) {
        console.error('Erro ao testar conexão com MongoDB:', error);
        res.status(500).json({ error: 'Erro ao conectar ao MongoDB' });
    }
}
