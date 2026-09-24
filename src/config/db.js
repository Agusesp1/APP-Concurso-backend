// src/config/db.js
// Instancia única de Sequelize — importar en los modelos

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME     || 'app_concurso',
  process.env.DB_USER     || 'root',
  process.env.DB_PASSWORD || '',
  {
    host:    process.env.DB_HOST || 'localhost',
    port:    Number(process.env.DB_PORT) || 3306,
    dialect: 'mysql',
    logging: process.env.NODE_ENV === 'development'
      ? (msg) => console.log(`[SQL] ${msg}`)
      : false,
    define: {
      // snake_case en la BD, camelCase en JS
      underscored: true,
      // agrega createdAt / updatedAt automáticamente
      timestamps: true,
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

module.exports = sequelize;
