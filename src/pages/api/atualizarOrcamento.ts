import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../lib/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'PUT') {
        const { id, firstName, phone, email, streetAddress, city, region, postalCode, room, pet, frequency, date, hour, message } = req.body;

        if (!id || !firstName || !phone || !email || !streetAddress || !city || !region || !postalCode || !room || !pet || !frequency || !date || !hour || !message) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
        }

        try {
            const { db } = await connectToDatabase();
            const result = await db.collection('t_orcamento').updateOne(
                { _id: new ObjectId(id) },
                { $set: { firstName, phone, email, streetAddress, city, region, postalCode, room, pet, frequency, date, hour, message } }
            );
            if (result.matchedCount === 0) {
                return res.status(404).json({ error: 'Orçamento não encontrado' });
            }
            return res.status(200).json({ message: 'Orçamento atualizado com sucesso' });
        } catch (error) {
            console.error('Erro ao atualizar orçamento:', error);
            return res.status(500).json({ error: 'Erro ao atualizar orçamento' });
        }
    } else {
        res.setHeader('Allow', ['PUT']);
        return res.status(405).end(`Método ${req.method} não permitido`);
    }
}
