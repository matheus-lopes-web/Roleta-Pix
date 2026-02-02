# 🎡 Roleta do PIX

Uma aplicação web interativa que simula uma roleta com prêmios em dinheiro e envia o resultado por email.

## ✨ Características

- 🎯 8 segmentos: 1x R$300, 2x R$200, 5x R$100
- 🎬 Animação suave de giro com duração de 5 segundos
- 🔒 Usuário só pode girar uma única vez
- 🎉 Modal comemorativo com o resultado
- 📧 Envio automático do resultado por email
- 📱 Design responsivo e colorido

## 🚀 Deploy na Vercel

### Pré-requisitos

1. Conta na [Vercel](https://vercel.com)
2. Repositório Git (GitHub, GitLab, Bitbucket)
3. Credenciais Gmail com senha de app

### Passos para Deploy

1. **Prepare as credenciais do Gmail:**
   - Acesse: https://myaccount.google.com/apppasswords
   - Selecione "Mail" e "Windows Computer" (ou dispositivo)
   - Gere uma senha de app (ela terá 16 caracteres com espaços)

2. **Push para o repositório:**
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

3. **Deploy na Vercel:**
   - Vá para https://vercel.com/new
   - Selecione seu repositório
   - Configure as variáveis de ambiente:
     - `EMAIL_USER`: seu-email@gmail.com
     - `EMAIL_PASSWORD`: sua-senha-de-app-16-caracteres

4. **Clique em Deploy!**

## 🏃 Execução Local

### Instalação

```bash
npm install
```

### Configuração

Crie um arquivo `.env` na raiz do projeto:

```
EMAIL_USER=seu-email@gmail.com
EMAIL_PASSWORD=sua-senha-de-app
PORT=3000
```

### Execução

```bash
npm start
```

Acesse: http://localhost:3000

## 📁 Estrutura do Projeto

```
.
├── index.html              # Frontend (HTML, CSS, JavaScript)
├── package.json            # Dependências do Node.js
├── vercel.json            # Configuração de deploy da Vercel
├── .env                   # Variáveis de ambiente (não commitar)
├── .env.example           # Template de variáveis de ambiente
└── api/
    └── enviar-resultado.js # Endpoint serverless para enviar email
```

## 🔧 Tecnologias Utilizadas

- **Frontend:** HTML5, CSS3, JavaScript (Canvas API)
- **Backend:** Node.js, Express.js
- **Email:** Nodemailer + Gmail SMTP
- **Deploy:** Vercel (Serverless)

## 📧 Personalização do Email

Para alterar o email de destino, edite o arquivo `api/enviar-resultado.js` e mude a linha:

```javascript
to: 'matheus.lopes.rocha@gmail.com', // Mude aqui
```

## 🐛 Troubleshooting

### "CANNOT GET /" na Vercel
- Verifique se o `vercel.json` está correto
- Confirme que o arquivo `index.html` existe

### Email não está sendo enviado
- Verifique se as variáveis `EMAIL_USER` e `EMAIL_PASSWORD` estão configuradas
- Confirme que você gerou uma senha de app (não a senha da conta)
- Verifique os logs da Vercel para mais detalhes

### Erro de CORS
- A API está configurada para aceitar requisições de qualquer origem
- Se continuar com problemas, check se está usando a URL correta

## 📝 Licença

MIT
