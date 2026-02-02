const path = require('path');

export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  const fs = require('fs');
  const indexPath = path.join(process.cwd(), 'index.html');
  const html = fs.readFileSync(indexPath, 'utf8');
  res.send(html);
}
