const express = require("express");
const app = express();
const porta = 3333;
const router = express.Router();

function mostraHora(request, response) {
  const data = new Date()
  const hora = data.toLocaleTimeString('pt-BR')
  response.send(hora)
}


app.listen(porta);
app.use(router.get('/hora', mostraHora));