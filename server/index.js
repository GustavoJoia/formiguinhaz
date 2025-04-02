const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Conectar ao MongoDB
mongoose.connect('mongodb://localhost:27017/meu-banco', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
  console.log('Conectado ao MongoDB');
});

// Rota exemplo
app.get('/', (req, res) => {
  res.send('API Funcionando');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
