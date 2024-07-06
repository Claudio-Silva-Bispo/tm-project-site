import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../lib/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'PUT') {
        const { id, nome, email, telefone, mensagem } = req.body;

        if (!id || !nome || !email || !telefone || !mensagem) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
        }

        try {
            const { db } = await connectToDatabase();
            const result = await db.collection('t_contato').updateOne(
                { _id: new ObjectId(id) },
                { $set: { nome, email, telefone, mensagem } }
            );
            if (result.matchedCount === 0) {
                return res.status(404).json({ error: 'Contato não encontrado' });
            }
            return res.status(200).json({ message: 'Contato atualizado com sucesso' });
        } catch (error) {
            console.error('Erro ao atualizar contato:', error);
            return res.status(500).json({ error: 'Erro ao atualizar contato' });
        }
    } else {
        res.setHeader('Allow', ['PUT']);
        return res.status(405).end(`Método ${req.method} não permitido`);
    }
}
