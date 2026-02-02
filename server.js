const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('./'));

// Configure seus dados de email aqui
// Para Gmail, gere uma senha de app em: https://myaccount.google.com/apppasswords
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'seu-email@gmail.com',
    pass: process.env.EMAIL_PASSWORD || 'sua-senha-de-app'
  }
});

app.post('/enviar-resultado', async (req, res) => {
  const { valor, timestamp } = req.body;

  const htmlTemplate = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        body {
          font-family: Arial, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          margin: 0;
          padding: 20px;
        }
        .container {
          background: white;
          border-radius: 15px;
          padding: 40px;
          max-width: 500px;
          margin: 0 auto;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }
        h1 {
          color: #667eea;
          text-align: center;
          font-size: 2em;
          margin: 0 0 20px 0;
        }
        .prize {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          color: white;
          padding: 30px;
          border-radius: 10px;
          text-align: center;
          margin: 20px 0;
        }
        .prize-amount {
          font-size: 2.5em;
          font-weight: bold;
          margin: 10px 0;
        }
        .info {
          text-align: center;
          color: #666;
          font-size: 0.9em;
          margin-top: 20px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🎉 PARABÉNS SASSÁ! 🎉</h1>
        <div class="prize">
          <p>Você ganhou:</p>
          <div class="prize-amount">R$ ${valor}</div>
        </div>
        <div class="info">
          <p>Resultado sorteado em: ${new Date(timestamp).toLocaleString('pt-BR')}</p>
          <p>Da Roleta do PIX 💰</p>
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER || 'seu-email@gmail.com',
      to: 'matheus.lopes.rocha@gmail.com',
      subject: `🎡 Roleta do PIX - Você ganhou R$ ${valor}!`,
      html: htmlTemplate
    });

    res.json({ 
      success: true, 
      message: 'Email enviado com sucesso!' 
    });
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Erro ao enviar email: ' + error.message 
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log('Certifique-se de configurar as variáveis de ambiente EMAIL_USER e EMAIL_PASSWORD');
});
