// src/middlewares/errorHandler.js
// Middleware global de manejo de errores
// (ya registrado en app.js como último middleware)

/**
 * Formatea y responde con el error correspondiente.
 * Para activar un error con código HTTP específico:
 *   const err = new Error('Mensaje'); err.status = 400; next(err);
 */
// eslint-disable-next-line no-unused-vars
const errorHandler = (err, _req, res, _next) => {
  const status  = err.status  || 500;
  const message = err.message || 'Error interno del servidor';

  console.error(`[ERROR ${status}] ${message}`);
  if (process.env.NODE_ENV !== 'production') console.error(err.stack);

  res.status(status).json({ success: false, error: message });
};

module.exports = errorHandler;
