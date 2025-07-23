# Challenge ForIT 2025 - Lista de Tareas

Aplicación full-stack de lista de tareas desarrollada como parte del challenge de ingreso a Academia ForIT 2025. La aplicación permite crear, leer, actualizar y eliminar tareas (CRUD completo) con una interfaz web moderna y una API REST robusta.

## Características

- **Gestión de Tareas**: CRUD completo para crear, leer, actualizar y eliminar tareas.
- **API REST con Express**
- **Filtros**: filtros para mostrar todas las tareas, solo completadas o pendientes

## Tecnologías Utilizadas

### Backend

- **Node.js** - Entorno de ejecución de JavaScript
- **Express.js** - Framework web para Node.js
- **UUID** - Generación de identificadores únicos
- **CORS** - Middleware para habilitar CORS
- **dotenv** - Manejo de variables de entorno

### Frontend

- **React 18** - Biblioteca de JavaScript para interfaces de usuario
- **Vite** - Herramienta de construcción y desarrollo
- **React Router DOM** - Enrutamiento para React
- **Tailwind CSS** - Framework de CSS utilitario

## Instalación

### Prerrequisitos
- **Node.js** (versión 18 o superior)
- **npm o yarn**

1. Clona el repositorio desde GitHub.

   ```bash
   git clone https://github.com/sofiatorres5082/tasks-app-forit.git
   ```

2. Configurar el Backend
   ```bash
   cd backend
   npm install
   ```
   Crea un archivo `.env` en la raíz del proyecto y configura tus variables de entorno.
   ```bash
   PORT=3000
   ```
   Inicia la aplicación.
   ```bash
   npm run dev
   ```

3. Configurar el Frontend.
   Abre una nueva terminal y desde la raíz del proyecto:
   ```bash
   cd frontend
   npm install
   ```
   Crea un archivo `.env` en la raíz del proyecto y configura tus variables de entorno.
   ```bash
   VITE_API_URL=http://localhost:3000/api
   ```
   Inicia la aplicación.
   ```bash
   npm run dev
   ```
   
4. Acceder a la aplicación

- **Backend**: http://localhost:3000
- **Frontend**: http://localhost:5173

## Uso

La API está pensada para servir como backend de la aplicación de gestión de tareas. Los endpoints principales incluyen:

- `GET /tasks`: Obtener todas las tareas.
- `GET /tasks?status=completed`: Obtener tareas completadas.
- `GET /tasks?status=pending`: Obtener tareas pendientes.
- `POST /tasks`: Crear nueva tarea.
- `PUT /tasks/:id`: Actualizar tarea.
- `DELETE /tasks/:id`: Eliminar tarea.

### Ejemplo de respuesta
```bash
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "title": "Completar challenge",
  "description": "Terminar la aplicación de lista de tareas",
  "completed": false,
  "createdAt": "2025-01-23T10:30:00.000Z"
}
```

## Estructura del Proyecto

```plaintext
task-manager/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── dotenv.js
│   │   ├── controllers/
│   │   │   └── task.controller.js
│   │   ├── middlewares/
│   │   │   └── error.handler.js
│   │   ├── models/
│   │   │   └── task.model.js
│   │   ├── routes/
│   │   │   └── task.routes.js
│   │   ├── services/
│   │   │   └── task.service.js
│   │   ├── app.js
│   │   └── index.js
│   ├── package.json
│   └── .env
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── TaskForm.jsx
    │   │   ├── TaskItem.jsx
    │   │   └── TaskList.jsx
    │   ├── pages/
    │   │   └── Home.jsx
    │   ├── services/
    │   │   └── api.js
    │   ├── App.jsx
    │   └── main.jsx
    ├── package.json
    └── .env
```

## Capturas de pantalla

<p align="center">
  <img src="https://github.com/user-attachments/assets/3f95fcec-8121-4102-940c-ca309181761b" width="45%"/>
  <img src="https://github.com/user-attachments/assets/0f4d886d-1138-4b8c-bb7a-793503904741" width="45%"/>
  <img src="https://github.com/user-attachments/assets/b55bc157-eb72-4467-a9cf-5a1141a2cfee" width="45%"/>
</p>

