# APP-Concurso — Backend

API REST construida con **Node.js** y **Express** siguiendo la arquitectura **MVC**.

---

## 📁 Estructura del proyecto

```
APP-Concurso-backend/
├── src/
│   ├── app.js                  ← Punto de entrada: configura Express y monta rutas
│   ├── config/
│   │   └── db.js               ← Conexión a la base de datos (placeholder)
│   ├── controllers/
│   │   └── example.controller.js  ← Lógica de cada endpoint
│   ├── middlewares/
│   │   ├── errorHandler.js     ← Manejo global de errores
│   │   └── notFound.js         ← Respuesta 404
│   ├── models/
│   │   └── example.model.js    ← Acceso a datos (en memoria → reemplazar con BD)
│   └── routes/
│       ├── index.js            ← Router principal
│       └── example.routes.js   ← Rutas del módulo "example"
├── .env.example                ← Variables de entorno de ejemplo
├── .gitignore
└── package.json
```

---

## 🚀 Inicio rápido

```bash
# 1. Instalar dependencias
npm install

# 2. Crear archivo de entorno
cp .env.example .env
# Editar .env con tus valores

# 3. Modo desarrollo (con recarga automática)
npm run dev

# 4. Modo producción
npm start
```

---

## 📡 Endpoints disponibles

| Método | Ruta                  | Descripción             |
|--------|-----------------------|-------------------------|
| GET    | `/`                   | Info del API            |
| GET    | `/api/health`         | Estado del servidor     |
| GET    | `/api/example`        | Listar todos            |
| GET    | `/api/example/:id`    | Obtener por ID          |
| POST   | `/api/example`        | Crear nuevo             |
| PUT    | `/api/example/:id`    | Actualizar              |
| DELETE | `/api/example/:id`    | Eliminar                |

---

## 🏗️ Patrón MVC

| Capa         | Carpeta         | Responsabilidad                              |
|--------------|-----------------|----------------------------------------------|
| **Model**    | `src/models/`   | Acceso y manipulación de datos               |
| **View**     | —               | El frontend (repositorio separado)           |
| **Controller** | `src/controllers/` | Recibe request, llama al Model, envía response |
| **Routes**   | `src/routes/`   | Mapeo de URLs a Controllers                  |

---

## ➕ Agregar un nuevo módulo

1. Crear `src/models/nuevo.model.js`
2. Crear `src/controllers/nuevo.controller.js`
3. Crear `src/routes/nuevo.routes.js`
4. Registrar en `src/routes/index.js`:
   ```js
   router.use('/nuevo', require('./nuevo.routes'));
   ```