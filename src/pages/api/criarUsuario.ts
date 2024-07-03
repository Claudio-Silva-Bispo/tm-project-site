import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../lib/mongodb';
import bcrypt from 'bcryptjs';
import { Usuario } from '../../models/usuario';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { nome, email, telefone, senha }: Usuario = req.body;

        if (!nome || !email || !telefone || !senha) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
        }

        try {
            const hashedPassword = await bcrypt.hash(senha, 10);
            const { db } = await connectToDatabase();
            const result = await db.collection('t_usuario').insertOne({ nome, email, telefone, senha: hashedPassword });
            return res.status(201).json({ message: 'Usuário salvo com sucesso', id: result.insertedId });
        } catch (error) {
            console.error('Erro ao salvar usuário:', error);
            return res.status(500).json({ error: 'Erro ao salvar usuário' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Método ${req.method} não permitido`);
    }
}
