import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../lib/mongodb';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const JWT_SECRET = process.env.JWT_SECRET || 'default-secret-key';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { email, senha } = req.body;

        if (!email || !senha) {
            return res.status(400).json({ error: 'E-mail e senha são obrigatórios' });
        }

        try {
            const { db } = await connectToDatabase();
            const usuario = await db.collection('t_usuario').findOne({ email });

            if (!usuario) {
                return res.status(401).json({ error: 'Credenciais inválidas' });
            }

            const senhaValida = await bcrypt.compare(senha, usuario.senha);

            if (!senhaValida) {
                return res.status(401).json({ error: 'Credenciais inválidas' });
            }

            const token = jwt.sign({ id: usuario._id, email: usuario.email }, JWT_SECRET, { expiresIn: '1h' });

            return res.status(200).json({ token });
        } catch (error) {
            console.error('Erro ao autenticar usuário:', error);
            return res.status(500).json({ error: 'Erro ao autenticar usuário' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Método ${req.method} não permitido`);
    }
}
