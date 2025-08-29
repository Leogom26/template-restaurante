const app = require("./app.js"); // note a extensão .js aqui
const http = require("http");

const port = 3000;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
