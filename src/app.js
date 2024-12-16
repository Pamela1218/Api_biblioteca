const express = require('express');
const autoresRoutes = require('./routes/autoresRoutes');
const librosRoutes = require('./routes/librosRoutes');

const app = express();

// Middleware para manejar JSON
app.use(express.json());

// Rutas
app.use('/autores', autoresRoutes);
app.use('/libros', librosRoutes);

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
