const mongoose = require('mongoose');
require('dotenv').config()

async function conectaBancoDeDados() {
  try {
    console.log('Banco de dados conectado');
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Conexão com bd feita com sucesso');
  } catch (error) {
    console.log(error)
  }
}

module.exports = conectaBancoDeDados;