const express = require("express");
const router = express.Router();
const cors = require('cors');

const conectaBancoDeDados = require('./bancoDeDados');
conectaBancoDeDados();

const Mulher = require('./mulherModel');

const app = express();
app.use(express.json());
app.use(cors());
const porta = 3333;


function mostraPorta() {
  console.log("Porta: ", 3333);
}

async function getMulheres(request, response) {
  try {
    const mulheres = await Mulher.find();
    response.json(mulheres);
  } catch (error) {
    console.log(error)
  }
}

async function postMulher(request, response) {
  const novaMulher = new Mulher({
    nome: request.body.nome, 
    imagem: request.body.imagem, 
    minibio: request.body.minibio,
    citacao: request.body.citacao
  });

  try {
    const mulher = await novaMulher.save();
    response.status(201).json(mulher);
  } catch (error) {
    console.log(error)
  }
}

async function patchMulher(request, response) {
  try {
    const mulherEncontrada = await Mulher.findById(request.params.id);

    if (request.body.nome) {
      mulherEncontrada.nome = request.body.nome;
    }
  
    if (request.body.minibio) {
      mulherEncontrada.minibio = request.body.minibio;
    }
  
    if (request.body.imagem) {
      mulherEncontrada.imagem = request.body.imagem;
    }

    if (request.body.citacao) {
      mulherEncontrada.citacao = request.body.citacao
    }
  
    const mulherAtualizada = await mulherEncontrada.save();
    response.json(mulherAtualizada);

  } catch (error) {
    console.log(error)
  }

  
}

async function deleteMulher(request, response) {
  try {
    await Mulher.findByIdAndDelete(request.params.id);
    response.json({mensagem: "Mulher deletada com sucesso!"});
  } catch (error) {
    console.log(error)
  }
}

app.use(router.get('/mulheres', getMulheres));
app.use(router.post('/mulheres', postMulher));
app.use(router.patch('/mulheres/:id', patchMulher));
app.use(router.delete('/mulheres/:id', deleteMulher))
app.listen(porta, mostraPorta);
