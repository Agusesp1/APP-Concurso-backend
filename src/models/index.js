// src/models/index.js
// Centraliza todos los modelos y exporta la instancia de Sequelize.
// Importar desde los controllers: const { Example } = require('../models');

const sequelize = require('../config/db');

// ─── Importar modelos ─────────────────────────────────────────────────────────
const Example = require('./example.model');

// ─── Asociaciones ─────────────────────────────────────────────────────────────
// Definir relaciones aquí cuando sea necesario. Ejemplo:
// Example.hasMany(OtroModelo, { foreignKey: 'example_id' });
// OtroModelo.belongsTo(Example, { foreignKey: 'example_id' });

module.exports = {
  sequelize,
  Example,
  // agregar nuevos modelos aquí
};
