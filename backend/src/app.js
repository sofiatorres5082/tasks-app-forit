import express from 'express';
import taskRoutes from './routes/task.routes.js';
import { errorHandler } from './middlewares/error.handler.js';

const app = express();

app.use(express.json());

app.use('/api/tasks', taskRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

app.use(errorHandler);

export default app;
