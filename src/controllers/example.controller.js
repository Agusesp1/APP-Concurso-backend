// src/controllers/example.controller.js
// Capa Controller: usa el modelo Sequelize — operaciones CRUD reales en BD

const { Example } = require('../models');

const ExampleController = {
  /**
   * GET /api/example
   * Retorna todos los registros
   */
  getAll: async (_req, res, next) => {
    try {
      const data = await Example.findAll();
      res.json({ success: true, data });
    } catch (err) {
      next(err);
    }
  },

  /**
   * GET /api/example/:id
   * Retorna un registro por ID
   */
  getById: async (req, res, next) => {
    try {
      const item = await Example.findByPk(req.params.id);
      if (!item) return res.status(404).json({ success: false, error: 'No encontrado' });
      res.json({ success: true, data: item });
    } catch (err) {
      next(err);
    }
  },

  /**
   * POST /api/example
   * Crea un nuevo registro
   */
  create: async (req, res, next) => {
    try {
      const newItem = await Example.create(req.body);
      res.status(201).json({ success: true, data: newItem });
    } catch (err) {
      // Sequelize lanza ValidationError con detalles
      if (err.name === 'SequelizeValidationError') {
        return res.status(400).json({
          success: false,
          error: err.errors.map((e) => e.message),
        });
      }
      next(err);
    }
  },

  /**
   * PUT /api/example/:id
   * Actualiza un registro existente
   */
  update: async (req, res, next) => {
    try {
      const item = await Example.findByPk(req.params.id);
      if (!item) return res.status(404).json({ success: false, error: 'No encontrado' });

      await item.update(req.body);
      res.json({ success: true, data: item });
    } catch (err) {
      if (err.name === 'SequelizeValidationError') {
        return res.status(400).json({
          success: false,
          error: err.errors.map((e) => e.message),
        });
      }
      next(err);
    }
  },

  /**
   * DELETE /api/example/:id
   * Elimina un registro
   */
  remove: async (req, res, next) => {
    try {
      const item = await Example.findByPk(req.params.id);
      if (!item) return res.status(404).json({ success: false, error: 'No encontrado' });

      await item.destroy();
      res.json({ success: true, message: 'Eliminado correctamente' });
    } catch (err) {
      next(err);
    }
  },
};

module.exports = ExampleController;
