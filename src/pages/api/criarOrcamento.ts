
import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../lib/mongodb';
import { Orcamento } from '../../models/orcamento';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        
        const { firstName, phone, email, streetAddress, city, region, postalCode, room, pet, frequency, date, hour, message }: Orcamento = req.body;

        if (!firstName || !phone || !email || !streetAddress || !city || !region || !postalCode || !room || !pet || !frequency || !date || !hour || !message) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
        }

        try {
            const { db } = await connectToDatabase();
            const result = await db.collection('t_orcamento').insertOne({ firstName, phone, email, streetAddress, city, region, postalCode, room, pet, frequency, date, hour, message });
            return res.status(201).json({ message: 'Orcamento salvo com sucesso', id: result.insertedId });
        } catch (error) {
            console.error('Erro ao salvar orcamento:', error);
            return res.status(500).json({ error: 'Erro ao salvar orcamento' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Método ${req.method} não permitido`);
    }
}
