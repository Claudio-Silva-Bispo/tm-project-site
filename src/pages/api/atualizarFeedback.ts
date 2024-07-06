// Backend: Incluindo o mostrar_tela no objeto de atualização
import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../lib/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'PUT') {
        const { id, nome, email, telefone, mensagem, nota, mostrar_tela } = req.body;

        if (!id || !nome || !email || !telefone || !mensagem || !nota || mostrar_tela === undefined) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
        }

        try {
            const { db } = await connectToDatabase();
            const result = await db.collection('t_feedback').updateOne(
                { _id: new ObjectId(id) },
                { $set: { nome, email, telefone, mensagem, nota, mostrar_tela } }
            );
            if (result.matchedCount === 0) {
                return res.status(404).json({ error: 'Feedback não encontrado' });
            }
            return res.status(200).json({ message: 'Feedback atualizado com sucesso' });
        } catch (error) {
            console.error('Erro ao atualizar feedback:', error);
            return res.status(500).json({ error: 'Erro ao atualizar feedback' });
        }
    } else {
        res.setHeader('Allow', ['PUT']);
        return res.status(405).end(`Método ${req.method} não permitido`);
    }
}
