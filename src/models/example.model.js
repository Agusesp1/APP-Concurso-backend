// src/models/example.model.js
// Modelo Sequelize para la entidad "Example"
// Sequelize genera automáticamente: id (PK), created_at, updated_at

const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class Example extends Model {}

Example.init(
  {
    // ── Columnas ────────────────────────────────────────────────────────────
    id: {
      type:          DataTypes.INTEGER.UNSIGNED,
      primaryKey:    true,
      autoIncrement: true,
    },
    name: {
      type:      DataTypes.STRING(100),
      allowNull: false,
      validate: {
        notEmpty: { msg: 'El nombre no puede estar vacío' },
        len: { args: [2, 100], msg: 'El nombre debe tener entre 2 y 100 caracteres' },
      },
    },
    description: {
      type:      DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
    },
  },
  {
    sequelize,            // instancia de conexión
    modelName: 'Example', // nombre del modelo en JS
    tableName: 'examples', // nombre real de la tabla en la BD
    // timestamps: true y underscored: true vienen del config/db.js
  }
);

module.exports = Example;
