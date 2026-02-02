const nodemailer = require('nodemailer');

// A Vercel exporta uma função handler em vez de usar app.listen
export default async function handler(req, res) {
  // Habilitar CORS manualmente se necessário
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  const { valor, timestamp } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      // Note que no seu código anterior estava EMAIL_PASSWORD, 
      // garanta que o nome na Vercel seja idêntico ao daqui
      pass: process.env.EMAIL_PASSWORD 
    }
  });

  const htmlTemplate = `... seu template HTML ...`;

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'matheus.lopes.rocha@gmail.com',
      subject: `🎡 Roleta do PIX - Você ganhou R$ ${valor}!`,
      html: htmlTemplate
    });

    return res.status(200).json({ success: true, message: 'Email enviado!' });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}