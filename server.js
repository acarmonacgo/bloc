const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3131;
const FILE = path.join(__dirname, 'index.html');

const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/index.html') {
    fs.readFile(FILE, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading editor');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(data);
    });
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`bloc corriendo en http://localhost:${PORT}`);
});
