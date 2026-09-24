// src/middlewares/notFound.js
// Middleware para rutas no registradas (404)

const notFound = (req, res) => {
  res.status(404).json({
    success: false,
    error: `Ruta no encontrada: ${req.method} ${req.originalUrl}`,
  });
};

module.exports = notFound;
