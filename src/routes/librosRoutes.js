const express = require('express');
const biblioteca = require('../controllers/bibliotecaController');

const router = express.Router();

// Endpoint para listar todos los libros
router.get('/', (req, res) => {
  res.json(biblioteca.listarLibros());
});

// Endpoint para listar libros disponibles
router.get('/disponibles', (req, res) => {
  res.json(biblioteca.listarLibrosDisponibles());
});

// Endpoint para listar libros no disponibles
router.get('/nodisponibles', (req, res) => {
  res.json(biblioteca.listarLibrosNoDisponibles());
});

module.exports = router;
