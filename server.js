const express = require("express");
const app = express();
const porta = 3333;

function mostraPorta() {
  console.log("Porta: ", 3333);
}

app.listen(porta, mostraPorta);