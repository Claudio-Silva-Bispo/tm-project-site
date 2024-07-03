import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { EMAIL_USER, EMAIL_PASSWORD, EMAIL_DESTINATARIO } = process.env;

        console.log('EMAIL_USER:', process.env.EMAIL_USER); 
        console.log('EMAIL_DESTINATARIO:', process.env.EMAIL_DESTINATARIO);
        
        // Verifica se as credenciais estão configuradas
        if (!EMAIL_USER || !EMAIL_PASSWORD) {
            console.error('Credenciais de e-mail não configuradas');
            return res.status(500).json({
                error: 'Credencial não configurada',
                credentials: {
                    EMAIL_USER,
                    EMAIL_PASSWORD,
                    EMAIL_DESTINATARIO
                }
            });
        }

        const { nome, email, servico, localizacao, mensagem } = req.body;
        console.log('Dados recebidos:', req.body); // Log dos dados recebidos do formulário

        try {
            // Configuração do serviço de email usando variáveis de ambiente
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: EMAIL_USER,
                    pass: EMAIL_PASSWORD,
                },
            });

            console.log('Transporter configurado:', transporter);

            // Configurações do email a ser enviado
            const mailOptions = {
                from: EMAIL_USER,
                to: EMAIL_DESTINATARIO,
                subject: 'Novo contato pelo formulário de contato',
                text: `Nome: ${nome}\nEmail: ${email}\nServiço: ${servico}\nLocalização: ${localizacao}\nMensagem: ${mensagem}`,
            };

            console.log('Opções do email:', mailOptions);

            // Envio do email
            const info = await transporter.sendMail(mailOptions);
            console.log('Email enviado:', info.response);
            res.status(200).send('Email enviado com sucesso');
        } catch (error) {
            console.error('Erro ao enviar o email:', error);
            res.status(500).json({
                error: 'Erro ao enviar o email',
                credentials: {
                    EMAIL_USER,
                    EMAIL_PASSWORD,
                    EMAIL_DESTINATARIO
                }
            });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Método ${req.method} não permitido`);
    }
}
