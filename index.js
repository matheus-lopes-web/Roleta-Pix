// Este arquivo serve apenas como entrypoint para a Vercel
// As funções serverless estão em /api

module.exports = (req, res) => {
  res.status(404).json({ message: 'Not found' });
};
