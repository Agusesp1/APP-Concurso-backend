// src/app.js — Punto de entrada de la aplicación

require('dotenv').config();
const express = require('express');
const cors    = require('cors');
const morgan  = require('morgan');

const { sequelize } = require('./models');  // importa la instancia de Sequelize
const routes = require('./routes');

const app  = express();
const PORT = process.env.PORT || 3001;

// ─── Middlewares globales ─────────────────────────────────────────────────────
app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// ─── Rutas ───────────────────────────────────────────────────────────────────
app.use('/api', routes);

// ─── Ruta raíz ───────────────────────────────────────────────────────────────
app.get('/', (_req, res) => {
  res.json({
    message: '🚀 APP-Concurso API funcionando',
    version: '1.0.0',
    docs: '/api',
  });
});

// ─── Manejador de rutas no encontradas (404) ──────────────────────────────────
app.use((_req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// ─── Manejador global de errores ─────────────────────────────────────────────
// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: err.message || 'Error interno del servidor',
  });
});

// ─── Conectar a la BD y arrancar el servidor ──────────────────────────────────
const syncMode = process.env.DB_SYNC === 'true'
  ? { alter: process.env.NODE_ENV !== 'production' }  // alter en dev, sin sync en prod
  : false;

sequelize
  .authenticate()
  .then(() => {
    console.log('✅  Conexión a MySQL establecida');
    // sync({ alter: true }) actualiza columnas sin borrar datos
    return syncMode ? sequelize.sync(syncMode) : Promise.resolve();
  })
  .then(() => {
    if (syncMode) console.log('🔄  Tablas sincronizadas con Sequelize');
    app.listen(PORT, () => {
      console.log(`✅  Servidor corriendo en http://localhost:${PORT}`);
      console.log(`📦  Entorno: ${process.env.NODE_ENV || 'development'}`);
    });
  })
  .catch((err) => {
    console.error('❌  Error al conectar a la base de datos:', err.message);
    process.exit(1);
  });

module.exports = app;
