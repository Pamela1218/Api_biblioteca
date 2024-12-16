const fs = require('fs');
const path = require('path');
const Autor = require('../models/Autor');
const Libro = require('../models/Libro');

class Biblioteca {
  constructor() {
    // Cargar los datos desde el archivo JSON
    const dataPath = path.join(__dirname, '../data/biblioteca.json');
    const { autores, libros } = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

    // Convertir datos en objetos Autor y Libro
    this.autores = autores.map(a => new Autor(a.id, a.nombre));
    this.libros = libros.map(l => new Libro(l.id, l.titulo, l.autorId, l.disponible));
  }

  // Métodos para autores
  listarAutores() {
    return this.autores;
  }

  // Métodos para libros
  listarLibros() {
    return this.libros;
  }

  listarLibrosDisponibles() {
    return this.libros.filter(libro => libro.disponible);
  }

  listarLibrosNoDisponibles() {
    return this.libros.filter(libro => !libro.disponible);
  }
}

module.exports = new Biblioteca();
