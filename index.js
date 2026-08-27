const express = require('express');

const app = express();
app.use(express.json());

let users = [];
let nextId = 1;

// POST - Criar usuário
app.post('/users', (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      error: 'Nome e e-mail são obrigatórios'
    });
  }

  const newUser = {
    id: nextId++,
    name,
    email
  };

  users.push(newUser);

  res.status(201).json({
    data: newUser
  });
});

// GET - Listar usuários
app.get('/users', (req, res) => {
  res.status(200).json({
    data: users
  });
});

// GET - Buscar usuário por ID
app.get('/users/:id', (req, res) => {
  const id = Number(req.params.id);
  const user = users.find(user => user.id === id);

  if (!user) {
    return res.status(404).json({
      error: 'Usuário não encontrado'
    });
  }

  res.status(200).json({
    data: user
  });
});

// PUT - Atualizar usuário
app.put('/users/:id', (req, res) => {
  const id = Number(req.params.id);
  const user = users.find(user => user.id === id);

  if (!user) {
    return res.status(404).json({
      error: 'Usuário não encontrado'
    });
  }

  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      error: 'Nome e e-mail são obrigatórios'
    });
  }

  user.name = name;
  user.email = email;

  res.status(200).json({
    data: user
  });
});

// DELETE - Remover usuário
app.delete('/users/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = users.findIndex(user => user.id === id);

  if (index === -1) {
    return res.status(404).json({
      error: 'Usuário não encontrado'
    });
  }

  users.splice(index, 1);

  res.status(204).send();
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});