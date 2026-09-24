// src/routes/example.routes.js — Rutas del módulo "example"

const { Router } = require('express');
const ExampleController = require('../controllers/example.controller');

const router = Router();

// GET    /api/example        → listar todos
// GET    /api/example/:id    → obtener uno
// POST   /api/example        → crear
// PUT    /api/example/:id    → actualizar
// DELETE /api/example/:id    → eliminar

router.get('/',     ExampleController.getAll);
router.get('/:id',  ExampleController.getById);
router.post('/',    ExampleController.create);
router.put('/:id',  ExampleController.update);
router.delete('/:id', ExampleController.remove);

module.exports = router;
