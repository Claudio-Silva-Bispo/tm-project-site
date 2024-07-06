

import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../lib/mongodb';
import { Feedback } from '../../models/feedback';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { nome, email, nota, mensagem }: Feedback = req.body;

        if (!nome || !email || !nota || !mensagem) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
        }

        const mostrar_tela = ""; // Inicializa o campo mostrar_tela como vazio

        try {
            const { db } = await connectToDatabase();
            const result = await db.collection('t_feedback').insertOne({ nome, email, nota, mensagem, mostrar_tela });
            return res.status(201).json({ message: 'Feedback salvo com sucesso', id: result.insertedId });
        } catch (error) {
            console.error('Erro ao salvar o feedback:', error);
            return res.status(500).json({ error: 'Erro ao salvar feedback' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Método ${req.method} não permitido`);
    }
}
