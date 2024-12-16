# API de Biblioteca

Esta API permite gestionar autores y libros en una biblioteca.

## Endpoints

### Autores
- **GET /autores**: Listar todos los autores.

### Libros
- **GET /libros**: Listar todos los libros.
- **GET /libros/disponibles**: Listar libros disponibles.
- **GET /libros/nodisponibles**: Listar libros no disponibles.

## Cómo usar
1. Ejecuta el servidor:
   ```bash
   node src/app.js
