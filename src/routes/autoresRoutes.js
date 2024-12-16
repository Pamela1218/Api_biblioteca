const express = require('express');
const biblioteca = require('../controllers/bibliotecaController');

const router = express.Router();

// Endpoint para listar todos los autores
router.get('/', (req, res) => {
  res.json(biblioteca.listarAutores());
});

module.exports = router;
