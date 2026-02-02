const express = require('express');
const path = require('path');
const enviarResultado = require('./api/enviar-resultado');

const app = express();

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// Servir pasta public
app.use('/public', express.static(path.join(__dirname, 'public')));

// Servir arquivos estáticos da raiz
app.use(express.static(path.join(__dirname, '.')));

// API Routes
app.post('/api/enviar-resultado', enviarResultado);

// Rota para servir o index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Fallback para SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

module.exports = app;
