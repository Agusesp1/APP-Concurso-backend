// src/routes/index.js — Router principal: monta todos los sub-routers

const { Router } = require('express');
const exampleRoutes = require('./example.routes');

const router = Router();

// ─── Sub-rutas ────────────────────────────────────────────────────────────────
// Agregar aquí cada módulo nuevo:
//   router.use('/nombre', require('./nombre.routes'));

router.use('/example', exampleRoutes);

// Ruta de salud del API
router.get('/health', (_req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

module.exports = router;
