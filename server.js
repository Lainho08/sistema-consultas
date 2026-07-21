const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const db = require('./db');

const app = express();

app.use(express.json());
app.use(express.static(__dirname));

app.post('/cadastro', async (req, res) => {
  try {
    const { nome_completo, email, cpf, data_nascimento, sexo, telefone, senha } = req.body;

    const senhaHash = await bcrypt.hash(senha, 10);

    await db.query(
      `INSERT INTO paciente (nome, email, cpf, data_nascimento, sexo, telefone, senha)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [nome_completo, email, cpf, data_nascimento, sexo, telefone, senhaHash]
    );

    res.json({ mensagem: 'Cadastro realizado com sucesso!' });
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: 'Erro ao cadastrar. Tente novamente.' });
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});