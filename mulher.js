const express = require("express");
const app = express();
const porta = 3333;
const router = express.Router();

function mostraPorta() {
  console.log("Porta: ", 3333);
}

function mostraMulher(request, response)  {
  response.json({
    nome: "Teste",
    imagem: "link",
    minibio: "teste"
  })
}

app.listen(porta, mostraPorta);
app.use(router.get('/mulher', mostraMulher));